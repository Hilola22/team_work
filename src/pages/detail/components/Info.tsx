import { memo } from "react";

const Info = () => {
  return (
    <div className="border container max-h-[80%] py-[20px]">
      <h2 className="text-4xl italic text-center">Info</h2>
      <p className="italic mt-[20px]">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere
        reiciendis, quia amet provident ad cum sit, voluptatum distinctio, nam
        eligendi error dolorem incidunt fugit ab placeat! Architecto vel omnis
        unde sequi magnam. Nisi, consectetur veniam odit fugiat iusto aliquam
        maxime corporis officiis eligendi illo, voluptatum dolore ipsam, eum
        modi possimus doloremque fugit eius! Quidem laboriosam voluptates quo
        iusto sed ipsum perferendis praesentium ducimus numquam porro distinctio
        ab sunt magnam, dicta error fugit odit eligendi laborum, non iure id
        odio quis eius? Tempore ipsam doloribus hic consequuntur quibusdam
        dolores modi, expedita quis possimus nemo earum quam rerum enim voluptas
        dolorem perferendis!
      </p>
    </div>
  );
};

export default memo(Info);
