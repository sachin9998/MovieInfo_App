# 🎥 MovieO - Movie Database Site

**MovieO** is an online movie database web application where users can discover and explore information about movies and TV shows. Inspired by IMDb, MovieO provides a rich experience, allowing users to browse details about their favorite films and series, view cast information, watch trailers, and much more.

Live Preview: [![Live Site](https://img.shields.io/badge/Live%20Site-Visit-blue)](https://movieoinfo.vercel.app/)

GitHub Repo Link: [![GitHub Repo](https://img.shields.io/badge/GitHub-Repo-green)](https://github.com/sachin9998/MovieInfo_App)

## 🌟 Features

- **Search for Movies and TV Shows**: Easily search and find details about any movie or TV show.
- **Cast Information**: View detailed information about the cast and crew.
- **Trailers**: Watch official trailers directly on the site.
- **Infinite Scroll**: The explore section features infinite scrolling for a seamless browsing experience.
- **Fully Responsive**: Optimized for all devices, from desktops to mobile phones.
- **High-Quality Data**: Powered by the [The Movie Database (TMDb) API](https://www.themoviedb.org/).

## 🛠️ Tech Stack

- **Frontend**: HTML, CSS, Tailwind CSS, ReactJS
- **State Management**: Redux Toolkit
- **API**: [The Movie Database (TMDb) API](https://www.themoviedb.org/)
- **Styling**: Tailwind CSS
- **Responsive Design**: Tailwind CSS & Custom Media Queries

## 🚀 Getting Started

### Prerequisites

Ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v14.x or later)
- [npm](https://www.npmjs.com/) or [Yarn](https://yarnpkg.com/)

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/sachin9998/MovieInfo_App.git
   cd MovieInfo_App
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

   or

   ```bash
   yarn install
   ```

3. **Create a `.env` file in the root directory and add your TMDb API key:**

   ```env
   REACT_APP_TMDB_API_KEY=your_tmdb_api_key_here
   ```

4. **Start the development server:**

   ```bash
   npm start
   ```

   or

   ```bash
   yarn start
   ```

5. **Open your browser and visit:**
   ```
   http://localhost:3000
   ```

## 📸 Screenshots

![MovieO Screenshot](./screenshots/homepage.png)
_Example of the homepage showing the latest movies._

## 📂 Project Structure

```plaintext
movieo/
├── public/
│   ├── index.html
│   └── ...
├── src/
│   ├── assets/
│   ├── components/
│   ├── features/
│   ├── pages/
│   ├── redux/
│   ├── App.js
│   └── index.js
├── .env
├── package.json
└── README.md
```

## 📝 License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/sachin9998/MovieInfo_App/issues) to see what’s going on.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a pull request

## 💬 Contact

For any inquiries, reach out via [email@example.com](mailto:email@example.com).

---

**Enjoy MovieO! Happy browsing!** 🎬

---

This README now includes both the live link and the GitHub repository link. Make sure to replace `your_tmdb_api_key_here` and `email@example.com` with the correct values.
