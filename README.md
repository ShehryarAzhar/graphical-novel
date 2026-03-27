# 🎨 Graphical Novel: Generative AI-based Text-to-Image Stories

A mobile application that dynamically generates personalized graphic novels
from user prompts or genre selection, combining AI-generated text
and images into a cohesive storytelling experience.

🔗 **Thesis/Documentation:** [View Full Documentation](https://drive.google.com/file/d/1FORlU0krMG0TVos0dcGtBLZMtCpu7q-N/view)

---

## ✨ Features

- 📖 **AI Story Generation** — Generates personalized stories from user prompts or genre selection
- 🖼️ **Image Generation** — Transforms story text into AI-generated illustrations

---

## 🛠️ Tech Stack

| Category         | Technology                 |
| ---------------- | -------------------------- |
| Frontend         | React Native               |
| Backend          | Python Flask + PHP Laravel |
| Database         | MySQL                      |
| Story Generation | TinyLlama (fine-tuned)     |
| Summarization    | T5-small                   |
| Image Generation | Stable Diffusion           |

---

## 🤖 Model Fine-Tuning

The `horror_tinyllama.ipynb` notebook covers the complete fine-tuning
pipeline for the TinyLlama model:

- Dataset creation using prompt-based story generation
- Dataset formatting to match TinyLlama's instruction format
- Fine-tuning on Google Colab

> ⚠️ **Hugging Face Token Required**
> To run the notebook, you need a Hugging Face access token.
>
> 1. Get your token from [huggingface.co/settings/tokens](https://huggingface.co/settings/tokens)
> 2. In the notebook, replace the empty Bearer token:
>
> ```python
> headers = {"Authorization": "Bearer YOUR_TOKEN_HERE"}
> ```

---

## 👥 Team

This was a University Final Year Project developed as a group:

- Muhammad Shehryar Azhar
- Ahmad Jawad
- Muhammad Talha

**Institution:** COMSATS University Islamabad, Abbottabad Campus (2020–2024)

---

## 📁 Project Structure

```
graphical-novel/
├── horror_tinyllama.ipynb   # TinyLlama fine-tuning notebook
├── fyp_app/                 # React Native frontend
│   ├── assets/              # Static assets (images, icons, ...)
│   ├── helpers/             # Utility/helper functions
│   ├── navigation/          # Navigation configuration
│   ├── screens/             # App screens
│   │   ├── Auth/            # Authentication screens
│   │   └── ...              # Other app screens
│   ├── App.js               # Entry point
│   ├── package.json
│   └── ...
└── README.md
```

---

_Made as a Final Year Project for BS Computer Science_
