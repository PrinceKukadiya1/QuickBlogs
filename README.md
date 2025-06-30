# 📝 Blog Website with AI Content Generation & Image Optimization

A feature-rich blog platform with an Admin Dashboard that leverages:

- **Gemini API** to auto-generate blog content based on the blog title
- **ImageKit** to compress and enhance uploaded images for better performance and quality

---

## 🚀 Features

### 🌐 Public Blog
- View and read published articles
- Browse by category or search by keyword
- Fully responsive and SEO-friendly

### 🔐 Admin Dashboard
- Secure login for admins
- Create, edit, and delete blog posts
- Upload and manage images
- Manage tags and categories
- **AI Content Generator**:
  - Enter a **blog title**
  - Generate full article content via **Gemini API**
  - Edit and publish AI-generated content

### 🖼️ Image Optimization (ImageKit)
- Compress images before upload
- Automatically enhance image quality
- Serve optimized images via CDN for faster loading

---

## 🤖 AI Content Generation with Gemini

The admin enters a blog **title** in the dashboard. That title is sent to the **Gemini API**, which returns a complete draft that includes:

- Introduction
- Section headings and paragraphs
- Summary or conclusion

### Example:
**Input Title**: `How to Stay Productive While Working From Home`  
**Output**: Full article with intro, tips, and conclusion written by Gemini.

---

## 🧰 Tech Stack

- **Frontend**: React / Tailwind CSS
- **Backend**: Node.js / Express
- **Database**: MongoDB
- **Authentication**: JWT
- **AI Integration**: Gemini API (Google)
- **Image Optimization**: ImageKit

---

## Images
### Dekstop View

  <img src="https://github.com/user-attachments/assets/794bce7d-b15f-4c9f-bda3-a617a3c4c263" alt="Blog Preview" style="width: 100%; max-width: 960px;">
  <img src="https://github.com/user-attachments/assets/c4d07578-72a6-4325-9f6f-81db39ef3170" alt="Blog Preview" style="width: 100%; max-width: 960px;">
  <img src="https://github.com/user-attachments/assets/87cadb0f-c40c-4780-9864-b99e85cadef7" alt="Blog Preview" style="width: 100%; max-width: 960px;">

### Mobile View & Tablet View

<p align="center">
  <img src="https://github.com/user-attachments/assets/be962e15-879b-4804-b911-17ca2067f0c4" alt="Mobile View" width="45%" style="margin-right: 10px; border-radius: 8px;" />
  <img src="https://github.com/user-attachments/assets/3ffdc061-b126-472f-bccc-2fe24f62dbc8" alt="Tablet View" width="45%" style="border-radius: 8px;" />
</p>

---

## 📦 Installation & Setup

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/blog-website.git
   cd blog-website

2. **Install dependencies**:
   ```bash
   npm install

3. **Create a .env file with the following**:
   ```bash
   GEMINI_API_KEY=your_gemini_api_key
   IMAGEKIT_PUBLIC_KEY=your_imagekit_public_key
   IMAGEKIT_PRIVATE_KEY=your_imagekit_private_key
   IMAGEKIT_URL_ENDPOINT=https://ik.imagekit.io/your_imagekit_id
   MONGO_URI=your_mongodb_uri
   JWT_SECRET=your_jwt_secret

4. **Run the development server**:
   ```bash
   npm run server
