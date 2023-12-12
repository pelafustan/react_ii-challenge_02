import { Card, Image, List, Typography } from "antd";
import { Photos } from "../App";
import IconHeart from "./IconHeart";

type GalleryProps = {
  data: Photos[];
  setData: React.Dispatch<React.SetStateAction<Photos[]>>;
  isFav?: boolean;
}

export default function Gallery({ data, setData, isFav }: GalleryProps) {

  const handleClick = (event: any) => {
    const id: number = parseInt(event.target.parentElement.parentElement.dataset.id);
    let photos = data.map((photo) => {
      if (photo.id === id) {
        return (
          { ...photo, liked: !photo.liked }
        );
      }
      return { ...photo };
    })
    setData(photos);
  };

  return (
    <>
      <List
        grid={{
          gutter: 16,
          xs: 1,
          sm: 1,
          md: 2,
          lg: 5,
          xl: 5,
          xxl: 5,
        }}
        style={{ marginTop: "0.85rem" }}
        dataSource={data}
        renderItem={(item) => (
          <List.Item key={item.id}>
            <Card
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
                  {!isFav
                    ? <IconHeart
                      onClick={handleClick}
                      filled={item.liked}
                      style={{
                        position: "absolute",
                        top: "3%",
                        left: "78%",
                      }}
                    />
                    : null
                  }
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
          </List.Item>
        )}
      />
    </>
  );
}
