---
title: "DevCon 2016 Word Cloud"
authors: ["Ian Kottman"]
date: 2016-09-28
tags: [devcon, tech talks]
thumbnail: "word_cloud.png"
---

Every year we hold an internal developers conference called [DevCon](http://engineering.cerner.com/2013/08/devcon/). This year
we had 295 submissions for talks, ranging from a deep technical dive into the inner workings of Kafka to a reflection on the power of office pranks.‌ I wondered what, if anything, do these submissions have in common? Are there any common themes/topics being discussed? To find out I decided to visualize the talk submissions in a word cloud to create an easily understandable (and hopefully aesthetically pleasing) view of what topics were most common.

The first step was some basic data cleaning so I could get a good set of words to visualize. I used Python to read in the submissions into a single string, lowercase all words, and then remove all common contractions.

```python
# read all submissions into a single string
text = open('./submissions.txt').read()

# lower case
text = text.lower()

# remove all contractions to prevent situations like "we'll" becoming "well" once punctuation is removed
# normally a regex tokenizer could be used for this but that assumes single quote is only ever used
# in contractions
with open("./resources/contractions.txt", "r") as file:
    contractions = file.read().splitlines()
    for contraction in contractions:
        text = text.replace(contraction, "")



Next I replaced all punctuation with spaces. I did not just remove the punctuation so special cases such as hyphenated-words and the phrase "and/or" are preserved.

# replace all punctuation with spaces.
for char in set(string.punctuation):
    text = text.replace(char, " ")
```

At this point I had 32,987 total words. A word cloud of this dataset was too noisy, predominated by common words like "the" and "talk". In natural language processing these unwanted common words are called "stop words". To remove them I made a list out of the submissions and then only kept words that were not in a list of common English words, supplemented by words specific to this data set, such as "Cerner" and "presentation".

```python
# get list of all words
submission_words = re.sub("[^\w]", " ", text).split()

# only keep words that are not in the stop words set
stopwords = open('./resources/stopwords.txt').read()
stopwords_set = set(stopwords.split("\n"))
filtered_word_list = [w for w in submission_words if w not in stopwords_set]
```

This left me with a list of 14,291 words and 4,264 distinct words. When visualized I noticed many similar words were taking the highest spots, such as "team" and "teams" or "technology" and "technologies". To remove some of this noise I turned to lemmatization. Lemmatization is the process of finding a canonical representation of a word, i.e. its lemma. For example, the lemma for the words "runs" and "running" is run. I used the popular Python library Natural Language Toolkit for lemmatization.

```python
lemmatizer = WordNetLemmatizer()
reduced_list = []
# find the lemma of each word
for word in filtered_word_list:
  reduced_list.append(lemmatizer.lemmatize(word))
```

This reduced the dataset to 3,834 distinct words. Now that the dataset was cleaned, common words filtered out, and similar words combined it was time to create the word cloud using a project called [word_cloud](https://github.com/amueller/word_cloud).

```python
cloud = WordCloud(relative_scaling=.5, height=1024, width=760)
cloud.generate(submissions)

# write to file
cloud.to_file(path.join(path.dirname(__file__), "cloud.png"))

# show word cloud using matplotlib
plt.imshow(cloud)
plt.axis("off")
plt.show()
```

{{< figure src="word_cloud.png" alt="Word Cloud" >}}


Success! It is obvious what some of the most common themes are, such as "data" and "team". Possible future steps for cleaning up the data would be grouping noun phrases, such as "software engineer" into single words or possibly removing common spelling mistakes using a spell checking library like [PyEnchant](https://pythonhosted.org/pyenchant/).


You can checkout the full code on [Github](https://github.com/ikottman/devcon-word-cloud).
