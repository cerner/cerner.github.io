module Jekyll
  module Engineer
    class RenderEngineerTag < Liquid::Tag

      def initialize(tag_name, text, tokens)
        super
        @text = text.strip.to_sym
      end

      def render(context)
        return '<h2>Tell us a little about yourself</h2>' if @text == :about
        return '<h2>What hardware do you use?</h2>' if @text == :hardware
        return '<h2>And what software</h2>' if @text == :software
        return '<h2>What would be your dream setup?</h2>' if @text == :dream
      end
    end
  end
end

Liquid::Template.register_tag('engineer', Jekyll::Engineer::RenderEngineerTag)
