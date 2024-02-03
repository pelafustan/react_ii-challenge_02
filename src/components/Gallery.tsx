import { Card, Image, Typography } from "antd";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Photos } from "../utils/types";
import IconHeart from "./IconHeart";

type GalleryProps = {
  data: Photos[];
  setData: React.Dispatch<React.SetStateAction<Photos[]>>;
  isFavView?: boolean;
}

export default function Gallery({ data, setData, isFavView = false }: GalleryProps) {

  const handleClick = (event: React.MouseEvent<SVGSVGElement, MouseEvent>) => {
    const id: number = parseInt(
      (event.target as SVGSVGElement).parentElement!.parentElement!.dataset.id!,
    );
    let photos = data.map((photo) => {
      if (photo.id === id) {
        return { ...photo, liked: !photo.liked };
      }
      return { ...photo };
    });
    setData(photos);
  };

  return (
    <>
      <Row md={4} className="justify-content-md-center mt-3">
        {
          data.map(item => {
            const className: string[] = [];
            if (isFavView && !item.liked) {
              className.push("not-liked")
            }
            return (
              <Col
                key={item.id}
                md="auto"
                className={className.join(" ")}
              >
                <Card
                  className="flex-fill mb-3"
                  key={item.id}
                  style={{
                    width: 245,
                  }}
                  cover={
                    <div
                      style={{
                        position: "relative",
                      }}
                      data-id={item.id}
                    >
                      <Image
                        alt={item.alt}
                        src={item.src.portrait}
                        width={"100%"}
                        preview={{ src: item.src.original }}
                      />
                      <IconHeart
                        onClick={handleClick}
                        filled={item.liked}
                        style={{
                          position: "absolute",
                          top: "3%",
                          left: "78%",
                        }}
                      />
                      <Typography.Text
                        strong
                        style={{
                          position: "absolute",
                          width: "90%",
                          color: "white",
                          left: "5%",
                          top: "18%",
                        }}
                      >
                        {item.alt}
                      </Typography.Text>
                    </div>
                  }
                >
                  <Typography.Paragraph strong>Photographer: </Typography.Paragraph>
                  <Typography.Paragraph>{item.photographer}</Typography.Paragraph>
                  <Typography.Paragraph>
                    <a href={item.photographer_url}>More here</a>
                  </Typography.Paragraph>
                </Card>
              </Col>
            )
          })
        }
      </Row>
    </>
  );
}
