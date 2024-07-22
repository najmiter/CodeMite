import instaloader

loader = instaloader.Instaloader(
    download_comments=False,
    download_geotags=False,
    download_pictures=False,
    download_video_thumbnails=False,
    save_metadata=False
)

# replace with any valid post link/url
url = 'https://www.instagram.com/p/C9Sj124xRsw/'

shortcode = url.split('/')[-2]

try:
    post = instaloader.Post.from_shortcode(loader.context, shortcode)
    # target is the folder name where it's going to be saved
    # you can call it anything you like
    loader.download_post(post, target=shortcode)

except Exception as e:
    print(f'Something went wrong: {e}')