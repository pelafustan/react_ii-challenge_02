import { Card, Image, List, Typography } from "antd";
import { Photos } from "../App";
import IconHeart from "./IconHeart";

export default function Gallery({ data, loading }: { data: Photos[]; loading?: boolean; }) {

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
        loading={loading}
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
                >
                  <Image
                    alt={item.alt}
                    src={item.src.portrait}
                    width={"100%"}
                    preview={{ src: item.src.original }}
                  />
                  <IconHeart
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
          </List.Item>
        )}
      />
    </>
  );
}
