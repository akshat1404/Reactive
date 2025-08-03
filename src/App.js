import React from 'react';
import { Scrollspy } from './reactive-ui';

export default function App() {

  const sections=[
    {
      title:"Section 1",
      id:"section1",
      renderContent:<div>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem mollitia recusandae repudiandae quas, dolor minima! Tempora quisquam eum voluptate qui consequatur alia Lorem, ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis iusto atque voluptatem, velit fugit cumque eum placeat, pariatur hic culpa ipsam saepe quia sint quisquam dolores harum dolorum rem eos!Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad ipsa aspernatur quaerat sapiente! Nemo possimus, autem culpa quos Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur hic quas nobis exercitationem. Ratione velit, qui dolorem, atque, unde amet dolorum cum totam quaerat eos voluptate a placeat sed! Quaerat? repellendus minima enim cumque fugiat dolores! Doloremque voluptatibus blanditiis explicabo minus eum. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet omnis autem, optio odio ea est atque sint quibusdam nesciunt cumque quidem esse, aliquid veritatis adipisci quas! Suscipit amet error officia.adipisicing elit. Aliquam magnam nulla molestias, aut accusamus expedita et est consequuntur dolores laboriosam illo tempora, recusandae ea ipsam. Neque dicta deleniti nemo sit?s reiciendis necessitatibus maiores voluptates accusantium, pariatur debitis deserunt.</div>
    },
    {
      title:"Section 2",
      id:"section2",
      renderContent:<div>lo Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem tenetur amet off lore Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore facere animi sint distinctio omnis doloribus earum Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis totam atque ipsum error? Obcaecati aliquam eum veniam quasi quia corrupti tenetur maiores enim magni illum quis, delectus magnam iusto eos.ipsa quisquam repudiandae magnam ipsam, iusto pariatur explicabo vel ea asperiores necessitatibus Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos quia, odit quidem, voluptates facilis ad rem, dolorem laudantium molestiae labore accusamus dolorum iusto? Magni autem, architecto eveniet officiis veniam quasi. laudantium itaque. icia Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, placeat iusto! Suscipit doloremque alias rerum velit delectus earum corrupti reiciendis odio, eum perspiciatis assumenda minus dignissimos magnam quas sit obcaecati. deleniti reiciendis doloremque soluta explicabo id dolores animi? Accusamus, hic! Ex voluptatum inventore nisi atque blanditiis quod tenetur! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium accusantium tempore impedit quisquam magni ipsa. Tenetur recusandae sit, molestiae delectus cum non officia vel assumenda, ad quaerat, consequuntur ea dolor.  e</div>
    },
    {
      title:"Section 3",
      id:"section3",
      renderContent:<div>lo Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur fuga ea error! Fugit quae qua Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus, eius porro voluptates, nihil ut numquam iure, vel necessitatibus doloremque repudiandae illo magnam voluptatem? Temporibu Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae vero, porro, ea eius mollitia vitae fugit, ullam magnam cupiditate qui tempora. Adipisci maiores aliquid ab labore totam enim, possimus aut. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos saepe porro quas nam. Sed, deleniti! Provident sunt voluptatum odio velit praesentium, nihil facere dolor, error consectetur aperiam est, dolore illo!s velit nulla porro quibusdam saepe aut. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non odit dicta veniam ullam minima odio doloribus fugiat eum dolorem quo natus nostrum mollitia, labore quis hic nisi. Quae, veniam laborum? erat, magni voluptas dolorum aliquam dicta ipsa corporis omnis quia illo maiores, suscipit repellendus alias ab. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem tenetur amet officia deleniti reiciendis doloremque soluta explicabo id dolores animi? Accusamus, hic! Ex voluptatum inventore nisi atque blanditiis quod tenetur! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium accusantium tempore impedit quisquam magni ipsa. Tenetur recusandae sit, molestiae delectus cum non officia vel assumenda, ad quaerat, consequuntur ea dolor.  e</div>
    },
  ]

  return (
    <div style={{padding:'50px 10px'}} >
      <Scrollspy sections={sections} titles={sections?.map(section=>section.title)}  />
    </div>
  );
}