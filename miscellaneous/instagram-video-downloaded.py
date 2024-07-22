import instaloader

loader = instaloader.Instaloader(    
    download_pictures=False,
    download_video_thumbnails=False,
    download_geotags=False,
    download_comments=False,
    save_metadata=False
)

# replace with any valid post link
url = 'https://www.instagram.com/p/C9Sj124xRsw/'

shortcode = url.split("/")[-2]

try:
    post = instaloader.Post.from_shortcode(loader.context, shortcode)
    loader.download_post(post, target=shortcode)
except Exception as e:
    print(f"An error occurred: {e}")
