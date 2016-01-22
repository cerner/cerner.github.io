# Title: YouTube tag for Jekyll
# Author: Jon Fewins
# Description: Easily output videos from YouTube
#
# Syntax {% youtube [url/to/video] [width height] [date] [presenter] [title] %}
#
# Example:
# {% video https://www.youtube.com/embed/RISbWbZG-N0 720 480 "Jan 12, 2016" "Bilbo Baggins" "Living in a Hobbit Hole" %}
#

module Jekyll

  class YoutubeTag < Liquid::Tag
    @video = nil
    @height = '120'
    @width = '68'
    @date = ''
    @presenter = ''
    @title = ''

    def initialize(tag_name, markup, tokens)
      if markup =~ /(https?:\S+)(\s+(https?:\S+))?(\s+(https?:\S+))?(\s+(\d+)\s(\d+))?(\s+"(.*?)")?(\s+"(.*?)")?(\s+"(.*?)")?/i
        @video = $1
        @width = $7 if $7
        @height = $8 if $8
        @date = $10
        @presenter = $12
        @title = $14
      end
      super
    end

    def render(context)
      output = super

      if @video.size > 0
        direct_video = @video.sub('www.youtube.com','youtu.be').sub('embed/','')
        iframe = "<div class='video-wrapper'><iframe width='#{@width}' height='#{@height}' src='#{@video}' frameborder='0' allowfullscreen></iframe></div>"
        meta = "<div><span class='meta'>#{@date} | #{@presenter}</span></div>"
        title = "<div><a href='#{direct_video}'>#{@title}</a></div>"

        iframe + meta + title
      else
        "Error processing input, expected syntax: {% youtube [url/to/video] [width height] [date] [presenter] [title] %}"
      end
    end
  end
end

Liquid::Template.register_tag('youtube', Jekyll::YoutubeTag)

