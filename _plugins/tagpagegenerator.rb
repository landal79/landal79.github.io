module Jekyll

  class TagPage < Page
    def initialize(site, base, dir, tag)
      @site = site
      @base = base
      @dir = dir
      @name = 'index.html'

      self.process(@name)
      self.read_yaml(File.join(base, '_layouts'), site.config['tag_layout'])
      self.data['tag'] = tag    
    end
  end

  class TagPageGenerator < Generator
    safe true

    def generate(site)
      if site.layouts.key? 'article_by_tag'
        dir = site.config['tag_dir'] || 'tag/'
        site.tags.keys.each do |tag|
          tag_name = tag.gsub(/\s+/, '-')
          site.pages << TagPage.new(site, site.source, File.join(dir, tag_name), tag)
        end
      end
    end
  end

end
