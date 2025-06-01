export function PostComponent({ name, subtitle, time, image, description }) {
  return (
    <div className="post-card">
      <div className="post-header">
        <img src={image} alt={`${name}'s profile`} className="post-profile-img" />
        <div>
          <div className="post-name">{name}</div>
          <div className="post-subtitle">{subtitle}</div>
          {time && (
            <div className="post-time">
              <span>{time}</span>
              <img
                src="https://media.istockphoto.com/id/931336618/vector/clock-vector-icon-isolated.jpg?s=612x612&w=0&k=20&c=I8EBJl8i6olqcrhAtKko74ydFEVbfCQ6s5Pbsx6vfas="
                alt="clock icon"
                className="clock-icon"
              />
            </div>
          )}
        </div>
      </div>
      <div className="post-description">{description}</div>
    </div>
  );
}
