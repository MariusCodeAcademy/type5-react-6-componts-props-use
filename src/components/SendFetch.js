const baseUrl = 'https://jsonplaceholder.typicode.com/posts';
function SendFetch() {
  async function sendPostFetch() {
    const newPostObj = {
      title: 'My new Post',
      body: 'best time ever',
      userId: 5,
    };
    const resp = await fetch(baseUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newPostObj),
    });
    const atsInJs = await resp.json();
    console.log('atsInJs ===', atsInJs);
  }
  return (
    <div>
      <button onClick={sendPostFetch}>Send fetch</button>
    </div>
  );
}
export default SendFetch;
// sukurti tuscia komponenta SendFetch, isitraukti ji i App.js

// prideti mygtuka SendFetch ir iskviesti aprasyta sendPostFetch() {}

const dateSample = {
  year: 2022,
  month: 12,
  week: 45,
  day: 7,
};
