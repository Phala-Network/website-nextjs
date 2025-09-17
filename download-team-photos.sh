#!/bin/bash

# Create directories
mkdir -p public/team/photos

# Download team member profile pictures
echo "Downloading Phala Network team profile pictures..."

# GitHub contributors with known avatars
curl -o public/team/photos/kvinwang.jpg "https://avatars.githubusercontent.com/u/6442159?v=4&s=400"
curl -o public/team/photos/h4x3rotab.jpg "https://avatars.githubusercontent.com/u/1343470?v=4&s=400"
curl -o public/team/photos/jasl.jpg "https://avatars.githubusercontent.com/u/1024162?v=4&s=400"
curl -o public/team/photos/leechael.jpg "https://avatars.githubusercontent.com/u/106123?v=4&s=400"
curl -o public/team/photos/shelvenzhou.jpg "https://avatars.githubusercontent.com/u/5029067?v=4&s=400"
curl -o public/team/photos/tolak.jpg "https://avatars.githubusercontent.com/u/16411474?v=4&s=400"
curl -o public/team/photos/soptq.jpg "https://avatars.githubusercontent.com/u/32592090?v=4&s=400"
curl -o public/team/photos/index0011.jpg "https://avatars.githubusercontent.com/u/105425941?v=4&s=400"
curl -o public/team/photos/nanometerzhu.jpg "https://avatars.githubusercontent.com/u/5852979?v=4&s=400"
curl -o public/team/photos/goldenfiredo.jpg "https://avatars.githubusercontent.com/u/7801444?v=4&s=400"
curl -o public/team/photos/blocktink.jpg "https://avatars.githubusercontent.com/u/119058469?v=4&s=400"
curl -o public/team/photos/guigou12358.jpg "https://avatars.githubusercontent.com/u/92046056?v=4&s=400"
curl -o public/team/photos/mondaylord.jpg "https://avatars.githubusercontent.com/u/22017455?v=4&s=400"
curl -o public/team/photos/krhougs.jpg "https://avatars.githubusercontent.com/u/1382065?v=4&s=400"

echo "Profile pictures downloaded to public/team/photos/"
echo "Files created:"
ls -la public/team/photos/