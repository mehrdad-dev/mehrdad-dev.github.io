---
layout: post
date: 2022-07-26
title: Hair Coloring Application by Using CNNs and Image Segmentation (UNet)
projurl: https://github.com/mehrdad-dev/makeup-lab
inline: true
category: cv
---

Apply different colors to your hair! The next update would be about applying lipstick. The following technologies are used for this project:

- CNN architecture: U-Net
- Dataset:  CelebAMask-HQ
- Framework: TensorFlow

The process consists following steps:

- step1: upload your image
- step2: apply image segmetation on your image/video to generate mask image
- step3: apply color transformation on your original image/video based on mask image
- step4: enjoy!