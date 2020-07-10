require 'fileutils'

DEBUG = false

def puts(val, override: false)
  return unless DEBUG || override
  super(val)
end

# Some folders dont' match names so make them match
FileUtils.mv('./content/post/2018-10-20-culture-of-cybersecurity.md', './content/post/2018-10-29-culture-of-cybersecurity.md')
FileUtils.mv('./content/images/2015-01-29-managing-30000-logging-events-per-day', './content/images/2015-01-29-managing-30000-logging-events-per-day-with-splunk')

# Create a new folder in the posts for each md file
# Move the md file there and rename it index
Dir["./content/post/*.md"].each do |file|
  post_name = File.basename(file, '.md')
  Dir.mkdir("./content/post/#{post_name}")
  FileUtils.mv(file, "./content/post/#{post_name}/index.md")
end

# Move all the images into the corresponding posts folder
Dir["./content/images/*"].each do |post_directory|
  puts post_directory
  puts "Has Images"
  Dir["#{post_directory}/*"].each do |file|
    puts " => #{file}"
    FileUtils.mv(file, "./content/post/#{File.basename(post_directory)}/#{File.basename(file)}")
  end
end


Dir["./content/post/*"].each do |post_directory|
  if Dir[post_directory + '/*'].length == 1
    # puts "No images in here, skipping: #{post_directory}"
    next
  end
  index = post_directory + '/index.md'

  first_image = File.foreach(index).grep(/^{{< figure /).first
  raise "#{index} didn't find a first_image" if first_image.nil?
  # .match(/\{\{< figure src="(.*)".*\}\/}/ ).captures.first
  puts "First image is: #{first_image}", override: true

  # Open the file for modifications
  tempfile=File.open("file.tmp", 'w')
  index_file=File.new(index)
  seen_front_matter_opener = false # Tracker for finding the second front matter `---`
  index_file.each do |line|
    if line=~ /^---\n/
      puts "matching frontmatter line"
      puts line
      # If we saw the first one, then we are right above the last one
      if seen_front_matter_opener
        tempfile << 'thumnail: "TODO"'
        tempfile << "\n"
      end
      seen_front_matter_opener = true
    end
    tempfile << line
  end
  index_file.close
  tempfile.close

  FileUtils.mv(tempfile, index)
end