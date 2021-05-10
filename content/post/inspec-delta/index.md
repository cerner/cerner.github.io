---
title: "Introducing Inspec Delta"
authors: ["Jeremy Perron"]
date: 2021-05-11
tags: [security, oss]
thumbnail: "inspec-delta-bg.png"
---

{{< figure src="inspec-delta-icon.png" width="300">}}

## Problem

As security standards continuously evolve, the [Defense Information Systems Agency (DISA)](https://disa.mil/) releases a new revision to their [STIG (Security Technical Implementation Guide)](https://en.wikipedia.org/wiki/Security_Technical_Implementation_Guide) for each Operating System major version, as well as certain applications. These updates can range from minor metadata-only changes to a bevy of new, highly technical, system configuration assertions. To maintain the highest security posture, systems need to implement and validate compliance quickly after new standards are released.
 
Compounded with the above is the complexity of altering so many profiles and profile controls at once with accuracy. The metadata provided by DISA for tools [like Inspec](https://github.com/inspec/inspec) are delimited by architecture, but as humans, we have to break this down even further into manageable chunks. However, even with stringent organization into separate profiles and controls using a compliance tool like Inspec, the sheer volume of the data can be overwhelming when handling the process manually. 
 
Since the STIG is just a set of guidelines and rules, the owners must write implementation details themselves. With a new release of a STIG, we cannot simply replace the old with the new. Implementation details would be lost in this case. There was no tool on the market that would allow us to merge in the changes from a STIG into our existing profiles.

## How is a STIG Used?
 
To maintain compliance with the STIG and audit our systems, we maintain this codification of the various STIGs as a set of Inspec profiles. Inspec is a scanning tool from Chef Corporation. These profiles encode each rule from the STIG as a "control" in its own file and each profile contains on the order of 200 controls. We can then use these controls to check machines to determine whether they are in compliance with the STIG.

## Manual Process

The following steps are the way a profile would need to be updated without the help of inspec_delta. This assumes that no other tools are going to be utilized for the updates.
 
1. Download the STIG.
2. Parse through the [XCCDF](https://csrc.nist.gov/projects/security-content-automation-protocol/specifications/xccdf) of new STIG ID.
3. Compare each section of each control definition within the new STIG and match them to their corresponding Inspec tags.
4. If the Control Rule ID has been switched in the latest STIG, all controls must be mapped manually to their new IDs before any metadata can be assessed.
5. Convert any non-ASCII Characters to ASCII.
6. Swap text out for applicable controls.
7. Format text to programming language's styling standards in such a manner that the diff is minimized for when developers compare incoming changes.
8. Create new controls by hand, matching data provided in the STIG to every expected Inspec control tag.
9. Review the accuracy of the STIG transition.
10. Modify formatting where applicable to address any diff minimization issues.
11. Review all control IDs in the Inspec Profile and STIG, looking for Control IDs present in the profile, but not present in the new STIG. If any are found, these controls must be deleted.
12. Submit the manual changes to GitHub and create a comparison PR.
13. Use the metadata pull request to update implementation details.
14. Create an implementation pull request.

## Inspec Delta Workflow

The following steps are the way we internally update a profile utilizing inspec_delta. This ultimately arrives at the same outcome as the manual steps.
 
1. A new STIG is announced on the DISA website.
2. Developers download the STIG.
3. Utilizing inspec_delta, developers will feed the new STIG and the profile into the tool.

```bash
inspec_delta profile update --profile_path ~/inspec/RHEL_7_STIG_inspec \ 
  --stig_file_path ~/inspec/U_RHEL_7_STIG_V3R1_Manual-xccdf.xml
```

4. The tool will update the existing profile with the metadata changes from the new STIG.
5. The updated profile is then used to create a feature branch.
6. In this new feature branch, changes are examined and discussed by the code owners and applicable technology experts.

{{< figure src="inspec-delta-github-1.png" >}}

7. Controls whose new metadata requires changes to the implementation are then marked via PR comment for updates.
8. Developers then implement these changes against the feature branch.

{{< figure src="inspec-delta-github-2.png" >}}

9. Once all changes are complete, the feature branch is then compared against the dev branch where code owners and applicable tech experts will then plus +1 the changes.

## Conclusion

If we compare the workflow between the manual steps and the steps we use with inspec_delta, we can see many improvements in not just efficiency, but also accuracy.

1. No need to parse the STIG manually
2. No need to compare the profile to the STIG manually
3. No human errors when applying metadata changes
4. Ability to see all changes within a few seconds
5. Leverage [Rubocop](https://rubocop.org/) to provide syntax standardization

inspect_delta has helped us save time in staying current on technology guidelines from DISA. We are excited to open-source this project so that it can help others like you! If you would like to learn more, check out [inspect_delta](https://github.com/cerner/inspec_delta).