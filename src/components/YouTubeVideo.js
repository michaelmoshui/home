export default function YouTubeVideo() {
  return (
    <div style={{ display: "flex", "justify-content": "center" }}>
      <iframe
        width="75%"
        src="https://www.youtube.com/embed/vxje6DirE7E"
        title="光辉岁月 Beyond 吉他指弹"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
        style={{
          "aspect-ratio": "3/2",
        }}
      ></iframe>
    </div>
  );
}
