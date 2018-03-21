module Jekyll
  class RenderImgTag < Liquid::Tag

    def initialize(tag_name, variables, tokens)
      super
      @variables = variables.split(" ", 2)
      @url = @variables[0]
      @alt = @variables[1]
    end

    def render(context)
      "<img data-src='#{@url}' alt='#{@alt}' />"
    end
  end
end

Liquid::Template.register_tag('render_img', Jekyll::RenderImgTag)