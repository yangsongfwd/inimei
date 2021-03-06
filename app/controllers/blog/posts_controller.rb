class Blog::PostsController < Blog::BlogBaseController

  def index
    @setting = blog_setting
    @page = params[:page].nil? ? 1 : params[:page]
    @posts = Blog::Post.page(@page, @setting.blogs_per_page).includes(:user).published
  end

  def show
    @setting = blog_setting

    if current_user
      @post = Blog::Post.default.where('url = :url', {url: params[:post_url]}).first
    else
      @post = Blog::Post.published.where('url = :url', {url: params[:post_url]}).first
    end

    if @post.nil?
      not_found
    else
      comments = @post.comments
      @comments = comments
      @comment = comments.build
    end
  end

  def feed
    @setting = blog_setting
    @posts = Blog::Post.published.limit(25)
    if params[:tags].present?
      tags = Blog::Tag.where(name: params[:tags].split(',')).pluck(:id)
      @posts = @posts.joins(:taggings).where('blog_taggings.tag_id in (?)', tags)
    end
    render 'feed', layout: false
  end
end
