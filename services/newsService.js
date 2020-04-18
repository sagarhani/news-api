const { news } = require("./news");

exports.getHeadlines = async () => {
  try {
    const response = await news.get("/top-headlines", {
      params: { country: "in" }
    });
    return response.data;
  } catch (error) {}
};

exports.searchNews = async searchTerm => {
  try {
    const response = await news.get(`/everything?q=${searchTerm}`, {
      params: { q: searchTerm }
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};
