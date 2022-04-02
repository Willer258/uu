import { Button, Input } from "antd";
import React from "react";

function PageContentComponent() {
  const { Search } = Input;
  return (
    <div className="container p-4 mx-auto flex flex-wrap">
      <div className="flex border-b-2 p-4 items-center justify-between w-full mb-20 flex-wrap">
        <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 lg:w-1/3 ">
          Title
        </h1>
        <div className="lg:pl-6 flex flex-col md:flex-row  items-center space-x-3  leading-relaxed text-base">
          <div>
            <Search
              placeholder="input search text"
              allowClear
              style={{ width: 200 }}
            />
          </div>
          <div className="flex space-x-3">
            <Button>Action</Button>
            <Button>Action</Button>
          </div>
        </div>
      </div>
      <div className="h-full">
        <h1 className="text-xl">Content</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas
          assumenda praesentium qui necessitatibus inventore aliquam magnam
          voluptatibus ea repellat? Quos voluptatibus cum dolore nisi recusandae
          dolor, beatae aspernatur nobis sunt! Molestias quidem vitae dicta
          repellat, recusandae incidunt nostrum vel quam vero sapiente
          aspernatur consequatur reiciendis voluptate similique? Unde, vitae
          magni. Nostrum nihil architecto sunt illum, perspiciatis ratione omnis
          autem necessitatibus? Id nostrum dolores, neque voluptatem dolor eos
          asperiores, ratione velit corporis, libero expedita sint? Alias hic
          temporibus porro laborum modi cumque quos et similique. Veritatis
          nesciunt odio placeat maxime harum. Praesentium cupiditate laudantium
          iste ducimus et ab impedit hic doloribus esse saepe. Vel nostrum dolor
          nulla numquam expedita doloremque beatae consequuntur explicabo
          voluptate veritatis, sapiente, voluptatem, fugiat magni unde
          necessitatibus. Tenetur, sint. Illum corrupti aperiam consectetur at
          saepe odit ea repudiandae animi facere cupiditate atque ipsa dicta,
          praesentium ut eaque id veritatis tempore temporibus corporis vero vel
          deserunt provident? Laudantium. Sapiente sequi facilis dicta quae
          quia, ullam, accusantium deleniti commodi nam et libero fuga odio
          nihil? Distinctio sint veniam sapiente, cumque neque delectus ratione.
          Quis aspernatur autem at optio explicabo? Fugit laudantium nesciunt
          aliquid laborum facere harum molestiae, quo debitis ratione, deserunt
          quasi eaque eligendi, perferendis dicta similique. Eum recusandae
          reiciendis placeat est maxime, maiores totam? Sint nam dolorem
          inventore. Laborum quasi, sapiente dignissimos asperiores nesciunt,
          voluptatibus inventore, culpa dolor veniam fugit provident ipsum
          voluptatem? Vero laborum exercitationem est commodi esse, blanditiis
          quam doloribus et, id repellendus itaque quidem. Tempora. Minima
          numquam reiciendis quas pariatur repellat rem eaque velit aut
          reprehenderit libero quae, eius dicta possimus omnis molestias
          assumenda odit explicabo rerum delectus ut consequuntur quidem
          voluptates laudantium qui. Architecto? Quidem quaerat expedita vitae
          rem quos, inventore aperiam tenetur. Eveniet, amet provident. Ex
          molestias voluptate optio hic in dolore atque, ut quidem suscipit
          debitis aperiam dolorem provident aut, nemo earum.
        </p>
      </div>
    </div>
  );
}

export default PageContentComponent;
