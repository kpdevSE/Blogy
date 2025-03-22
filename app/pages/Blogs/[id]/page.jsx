"use client";

import { Pen } from "lucide-react";
import { useState } from "react";
import { BarLoader } from "react-spinners";

export default function BlogDetailsPage() {
  const [isLoaded, setIsLoaded] = useState(false);
  return (
    <div className="w-full">
      {isLoaded ? (
        <BarLoader width={"100%"} />
      ) : (
        <div>
          <h1 className="text-4xl font-bold">Blog 01</h1>
          <p className="text-lg font-semibold mt-6 flex items-center  gap-1">
            <Pen className="font-bold" size={15} /> By Kanishka Pasindu
          </p>
          <div className="flex items-center justify-center flex-col ">
            <h2 className="text-2xl mt-10 font-bold">Life Growth Tips</h2>
            <p className="mt-6">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias
              numquam laborum accusantium quod eveniet fugiat nesciunt qui
              aliquid veniam labore vel, tenetur itaque similique facere ad? Ex
              esse praesentium voluptas incidunt voluptatibus delectus quidem
              beatae perspiciatis non, consectetur reiciendis nisi cum
              repellendus blanditiis excepturi debitis fuga ullam nemo itaque
              ipsum sequi nam molestias molestiae? Dolorem, earum. Ad fuga in,
              architecto, veritatis doloremque quidem itaque assumenda harum
              voluptatibus velit labore maiores placeat non dolor adipisci magni
              tenetur! Nam similique consequatur libero minus excepturi fugit
              consequuntur totam delectus officiis deleniti. Exercitationem
              laborum ea dolores ullam. Dolores, obcaecati unde molestias minima
              incidunt accusamus. Lorem, ipsum dolor sit amet consectetur
              adipisicing elit. Delectus soluta assumenda doloremque ratione,
              magnam ullam quasi iste ad libero, dignissimos inventore
              consectetur fugit cupiditate voluptas? Eligendi est temporibus
              perferendis numquam error sit laudantium. Cupiditate vitae
              perferendis enim ad vero, praesentium optio, voluptatem laudantium
              quis veritatis quam natus molestiae. Laborum id ut molestiae,
              minus, doloribus impedit ex adipisci quis qui ipsa error numquam
              cumque, dolor magni nesciunt minima fugit ea sint saepe aliquid?
              Dolore, dolores vel. Ipsa enim dolor aliquam nobis, labore ut eos
              sint, molestias dolorum aspernatur commodi doloribus velit harum
              veniam quos laboriosam sed aut pariatur nulla ducimus dicta a!
              Consectetur nulla repellendus repudiandae omnis totam est, soluta
              beatae dolorem quis obcaecati laudantium delectus velit dolore id
              assumenda, debitis qui voluptates quas illum culpa facilis
              cupiditate laboriosam eaque! Amet praesentium ratione facere
              magnam dolores esse commodi autem hic, velit quibusdam
              voluptatibus nisi, odit doloribus voluptatum facilis sunt ad optio
              vitae ab. Necessitatibus nulla velit quia autem maxime eius ea.
              Impedit aut repudiandae veniam culpa sint vitae sed rerum ad ipsam
              dolores, eius magnam alias, dolorem assumenda doloribus excepturi
              tempore facere consequatur nulla aspernatur ea rem ipsa
              reprehenderit quae. Repellat deserunt ad non dicta perspiciatis
              nulla corrupti harum similique dolorem dolor expedita ullam
              aspernatur iste architecto, placeat repellendus quis, maiores nemo
              quos ducimus labore? Laborum adipisci, odio sunt quisquam eius
              obcaecati commodi quaerat quia molestias dolores architecto
              deserunt quo officia rerum ratione unde sed. Officia eius est
              quis. Eum praesentium iure deserunt repellendus accusamus at cum!
              Eos repellat illo quis. Saepe beatae reiciendis facilis nulla
              placeat eum laborum animi temporibus! Quisquam accusantium quis
              repellendus deserunt eos sit natus magni ipsum veniam minima
              laboriosam dolore debitis recusandae, alias quibusdam placeat
              beatae tenetur. Libero, nam nulla. Voluptate dolores sed dolor
              quasi, accusamus, porro ab iste laboriosam repellat blanditiis
              ipsa repellendus at fugiat rerum minima! Asperiores sapiente,
              explicabo consectetur quidem voluptate, nisi modi ab voluptatum
              vel minus quis omnis recusandae quas. Dolore commodi pariatur
              atque porro iste? Voluptate placeat inventore odio? Perspiciatis a
              corrupti nulla, provident ad praesentium ratione. Ratione
              aspernatur non incidunt mollitia rerum quam deserunt, doloribus
              error dignissimos natus dolore numquam maxime soluta quod nulla
              eius debitis. Debitis voluptatum modi voluptatem fuga facere aut
              ab, quia sint ipsa similique commodi nulla illo nemo corrupti
              maxime qui error molestiae numquam tenetur, asperiores cumque in?
              Veritatis nam aperiam repellat. Similique, adipisci natus
              asperiores est, rem ea animi deleniti soluta aliquid quod fugit.
              Mollitia deleniti eaque itaque libero ab et soluta doloremque id,
              sint perferendis! Porro, accusantium quis facere recusandae
              consequuntur minus enim deleniti nulla. Optio perferendis dolorum,
              sapiente odit iusto voluptas quidem qui eveniet iste quaerat
              doloribus, ipsum saepe ipsam quam libero molestias. Officia
              blanditiis ad numquam rem inventore obcaecati nostrum vero ab
              excepturi, dolore a quisquam fugiat voluptatem. Doloribus
              architecto dolorum perspiciatis ad nihil mollitia in ratione,
              eveniet dignissimos, culpa explicabo recusandae adipisci optio
              aperiam dolore doloremque nisi est fugiat, tempora illum vel minus
              libero totam cumque. Libero incidunt nihil nobis. Magni itaque qui
              praesentium inventore voluptate, maiores aut non sapiente labore?
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
