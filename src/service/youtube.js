import axios from 'axios';

class Youtube {
  constructor(key) {
    this.client = axios.create({
      baseURL: 'https://youtube.googleapis.com/youtube/v3',
      params: { key: key },
    });
  }

  async mostPopular() {
    const response = await this.client.get('videos', {
      params: {
        part: 'snippet',
        chart: 'mostPopular',
        maxResults: 24,
      },
    });
    return response.data.items;
    // const response = await fetch(
    //   `https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=${this.key}`,
    //   this.getRequestOptions
    // );
    // const result = await response.json();
    // return result.items;
  }

  async search(query) {
    const response = await this.client.get('search', {
      params: {
        part: 'snippet',
        type: 'video',
        maxResults: 24,
        q: query,
      },
    });
    return response.data.items.map((item) => ({
      ...item,
      id: item.id.videoId,
    }));
    // const response = await fetch(
    //   `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${query}&type=video&key=${this.key}`,
    //   this.getRequestOptions
    // );
    // const result = await response.json();
    // return result.items.map((item) => ({ ...item, id: item.id.videoId }));
  }
}
export default Youtube;
