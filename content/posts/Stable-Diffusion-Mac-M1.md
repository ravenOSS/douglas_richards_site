---
title: Run Stable Diffusion on Mac M1
slug: squares
date: October 29, 2022
createdAt: October 29, 2022 3:53 PM
author: Douglas Richards
issue: How to run Stable Diffusion Locally on Mac M1
solution: Use Automatic1111 setup
thumbnail: '/v1619638137/squares_pwjy6f.jpg'
heroImage: 'v1619638137/squares_pwjy6f.jpg'
postColor: 'bg-orange-600 dark:bg-blue-600'
category: 'Images'
exampleImage: ''
imagealt: 'squares'
introduction:
---

Using the script to run Stable Diffusion will result in an error:

```
ModuleNotFoundError: No module named 'torchsde'
```

Add

```
pip install torchsde
```

```
#!/usr/bin/env bash -l

# This should not be needed since it's configured during installation, but might as well have it here.

conda env config vars set PYTORCH_ENABLE_MPS_FALLBACK=1

# Activate conda environment

conda activate web-ui

pip install torchsde

# Pull the latest changes from the repo

git pull --rebase

# Run the web ui

python webui.py --precision full --no-half --use-cpu Interrogate GFPGAN CodeFormer $@

# Deactivate conda environment

conda deactivate
```
