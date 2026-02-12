import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { FaApple, FaGooglePlay } from "react-icons/fa";


function ProjectCards(props) {
  return (
    <Card className="project-card-view">
      {Array.isArray(props.images) && props.images.length > 0 && (
        <div
          className={`image-container ${props.images.length === 1 ? "single-img" : "double-img"
            }`}
        >
          {props.images.map((img, index) => (
            <Card.Img
              key={index}
              variant="top"
              src={img}
              alt={`project-img-${index}`}
              className="project-img"
            />
          ))}
        </div>
      )}

      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        {props.techStack && (
          <div className="tech-stack-container">
            {props.techStack.map((tech, index) => (
              <span key={index} className="tech-badge">
                {tech}
              </span>
            ))}
          </div>
        )}

        <Card.Text style={{ textAlign: "left" }}>
          <strong>Overview:</strong> {props.description}
        </Card.Text>

        {props.contribution && (
          <p style={{ textAlign: "left" }}>
            <strong>My Contribution:</strong> {props.contribution}
          </p>
        )}

        {/* All Action Buttons */}
        <div
          style={{
            marginTop: "20px",
            display: "flex",
            justifyContent: "center",
            gap: "15px",
            flexWrap: "wrap",
          }}
        >
          {props.ghLink && (
            <Button
              variant="primary"
              href={props.ghLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </Button>
          )}

          {props.webLink && (
            <Button
              variant="primary"
              href={props.webLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              Visit Website
            </Button>
          )}

          {props.iosLink && (
            <Button
              variant="dark"
              href={props.iosLink}
              target="_blank"
              rel="noopener noreferrer"
              style={{ display: "flex", alignItems: "center", gap: "8px" }}
            >
              <FaApple size={18} />
              App Store
            </Button>
          )}

          {props.androidLink && (
            <Button
              href={props.androidLink}
              target="_blank"
              rel="noopener noreferrer"
              style={{ display: "flex", alignItems: "center", gap: "8px" }}
            >
              <FaGooglePlay size={16} />
              Google Play
            </Button>
          )}
      </div>
    </Card.Body>
    </Card >
  );
}

export default ProjectCards;
