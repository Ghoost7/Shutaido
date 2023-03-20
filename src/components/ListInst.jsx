import React from "react";
import Image from "next/image";
import Richard from "../public/Richard.jpg";
import Puaud from "../public/Puaud.jpg";
import Christophe from "../public/Christophe.jpg";
import Estelle from "../public/Estelle.jpeg";
import AMG from "../public/AMG.png";
import Lebreton from "../public/Lebreton.jpg";

const ListInst = () => {
  return ( 
    <div className="max-w-[1240px] mx-auto text-center py-24">
      <div className="grid grid-rows-2 md:grid-rows-2 sm:grid-rows-2 content-center gap-2 p-4">
       
            <div>
                <figure class="border md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800">
                <Image class="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto" src="/sarah-dayan.jpg" alt="" width="384" height="512"/>
                <div class="pt-6 md:p-8 text-center md:text-left space-y-4">
                  <blockquote>
                      <p class="text-lg font-medium">
                        Apruzzese Philippe
                        </p>
                    </blockquote>
                      <figcaption class="font-medium">
                    <div class="text-sky-500 dark:text-sky-400">
                    Fondateur - Formateur
                </div>
                <div class="text-slate-700 dark:text-slate-500">
                  France
                </div>
              </figcaption>
            </div>            
            </figure>
          </div>
          <div>
                <figure class="border md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800">
                <Image class="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto" src="/sarah-dayan.jpg" alt="" width="384" height="512"/>
                <div class="pt-6 md:p-8 text-center md:text-left space-y-4">
                  <blockquote>
                      <p class="text-lg font-medium">
                      Maria-Isabel Apruzzese
                      </p>
                  </blockquote>
              <figcaption class="font-medium">
            <div class="text-sky-500 dark:text-sky-400">
              La Voix-e du Shutaïdo / Instructrice - Formatrice
            </div>
            <div class="text-slate-700 dark:text-slate-500">
             France
            </div>
            <div>
              <link/>
            </div>
            </figcaption>
          </div>            
        </figure>
      </div>

      <div>
                <figure class="border md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800">
                <Image class="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto" src="/sarah-dayan.jpg" alt="" width="384" height="512"/>
                <div class="pt-6 md:p-8 text-center md:text-left space-y-4">
                  <blockquote>
                      <p class="text-lg font-medium">
                      Apruzzese David
                      </p>
                  </blockquote>
              <figcaption class="font-medium">
            <div class="text-sky-500 dark:text-sky-400">
              Instructeur - Formateur
            </div>
            <div class="text-slate-700 dark:text-slate-500">
             Ile-de-France/Région PACA
            </div>
            </figcaption>
          </div>            
        </figure>
      </div>
      
                <figure className="border md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800">
                <Image className="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto" src="/sarah-dayan.jpg" alt="" width="384" height="512"/>
                <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
                  <blockquote>
                      <p className="text-lg font-medium">
                      Apruzzese Matteo
                      </p>
                  </blockquote>
              <figcaption class="font-medium">
            <div className="text-sky-500 dark:text-sky-400">
              Instructeur
            </div>
            <div class="text-slate-700 dark:text-slate-500">
             Dordogne
            </div>
            </figcaption>
          </div>            
        </figure>
      
      
                <figure class="border md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800">
                <Image class="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto" src="/sarah-dayan.jpg" alt="" width="384" height="512"/>
                <div class="pt-6 md:p-8 text-center md:text-left space-y-4">
                  <blockquote>
                      <p class="text-lg font-medium">
                      Thouret Pierre-Gilles
                      </p>
                  </blockquote>
              <figcaption class="font-medium">
            <div class="text-sky-500 dark:text-sky-400">
              Instructeur  
            </div>
            <div class="text-slate-700 dark:text-slate-500">
             Bretagne
            </div>
            </figcaption>
          </div>            
        </figure>
      
      <div>
                <figure class="border md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800">
                <Image class="w-48 h-48 md:w-48 md:h-auto mx-auto" src={Richard} alt="/" width="384" height="512"/>
                <div class="pt-6 md:p-8 text-center md:text-left space-y-4">
                  <blockquote>
                      <p class="text-lg font-medium">
                      Lamoureux Richard
                      </p>
                  </blockquote>
              <figcaption class="font-medium">
            <div class="text-sky-500 dark:text-sky-400">
            Instructeur  
            </div>
            <div class="text-slate-700 dark:text-slate-500">
             Charente-Maritimes
            </div>
            </figcaption>
          </div>            
        </figure>
      </div>
      <div>
                <figure class="border md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800">
                <Image class="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto" src="/sarah-dayan.jpg" alt="" width="384" height="512"/>
                <div class="pt-6 md:p-8 text-center md:text-left space-y-4">
                  <blockquote>
                      <p class="text-lg font-medium">
                      Crouzel Pejus Marianne
                      </p>
                  </blockquote>
              <figcaption class="font-medium">
            <div class="text-sky-500 dark:text-sky-400">
            Instructrice  
            </div>
            <div class="text-slate-700 dark:text-slate-500">
             Bretagne
            </div>
            </figcaption>
          </div>            
        </figure>
      </div>
            <div>
                 <figure class="border md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800">
                <Image class="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto" src="/sarah-dayan.jpg" alt="" width="384" height="512"/>
                <div class="pt-6 md:p-8 text-center md:text-left space-y-4">
                  <blockquote>
                      <p class="text-lg font-medium">
                      Cianni Isabelle
                      </p>
                  </blockquote>
              <figcaption class="font-medium">
            <div class="text-sky-500 dark:text-sky-400">
            Instructrice  
            </div>
            <div class="text-slate-700 dark:text-slate-500">
             Yvelines
            </div>
            </figcaption>
          </div>            
            </figure>
          </div>
      <div>
                <figure class="border md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800">
                <Image class="w-48 h-48 md:w-48 justify-center lg:mx-auto md:h-auto mx-auto" src={Christophe} alt="/" width="384" height="512"/>
                <div class="p-6 md:p-8 text-center md:text-left space-y-4">
                  <blockquote>
                      <p class="text-lg font-medium">
                      Lainé Christophe
                      </p>
                  </blockquote>
              <figcaption class="font-medium">
            <div class="text-sky-500 dark:text-sky-400">
            Instructeur  
            </div>
            <div class="text-slate-700 dark:text-slate-500">
             Baleares Espagne
            </div>
            </figcaption>
          </div>            
        </figure>
      </div>
      <div className="">
                <figure class="border md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800">
                <Image class="w-48 h-48 md:w-48 justify-center md:h-auto mx-auto" src={Puaud} alt="/" width="384" height="512"/>
                <div class="p-6 md:p-8 text-center md:text-left space-y-4">
                  <blockquote>
                      <p class="text-lg font-medium">
                      Puaud Isabelle
                      </p>
                  </blockquote>
              <figcaption class="font-medium">
            <div class="text-sky-500 dark:text-sky-400">
            Instructrice  
            </div>
            <div class="text-slate-700 dark:text-slate-500">
             Deux-Sèvres
            </div>
            </figcaption>
          </div>            
        </figure>
      </div>
      <div>
                <figure class="border md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800">
                <Image class="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto" src="/sarah-dayan.jpg" alt="" width="384" height="512"/>
                <div class="pt-6 md:p-8 text-center md:text-left space-y-4">
                  <blockquote>
                      <p class="text-lg font-medium">
                      Closmadeuc Anne
                      </p>
                  </blockquote>
              <figcaption class="font-medium">
            <div class="text-sky-500 dark:text-sky-400">
            Instructrice  
            </div>
            <div class="text-slate-700 dark:text-slate-500">
             Bourgogne
            </div>
            </figcaption>
          </div>            
        </figure>
      </div>
      <div>
                <figure class="border md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800">
                <Image class="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto" src="/sarah-dayan.jpg" alt="" width="384" height="512"/>
                <div class="pt-6 md:p-8 text-center md:text-left space-y-4">
                  <blockquote>
                      <p class="text-lg font-medium">
                      Candel Isabelle
                      </p>
                  </blockquote>
              <figcaption class="font-medium">
            <div class="text-sky-500 dark:text-sky-400">
            Instructrice  
            </div>
            <div class="text-slate-700 dark:text-slate-500">
             Occitanie
            </div>
            </figcaption>
          </div>            
        </figure>
      </div>
      <div className="">
                <figure class="border md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800">
                <Image class="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto" src="/sarah-dayan.jpg" alt="" width="384" height="512"/>
                <div class="pt-6 md:p-8 text-center md:text-left space-y-4">
                  <blockquote>
                      <p class="text-lg font-medium">
                      Billard Katia
                      </p>
                  </blockquote>
              <figcaption class="font-medium">
            <div class="text-sky-500 dark:text-sky-400">
            Instructrice  
            </div>
            <div class="text-slate-700 dark:text-slate-500">
             Suisse
            </div>
            </figcaption>
          </div>            
        </figure>
      </div>
      <div>
                <figure class="border md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800">
                <Image class="w-48 h-48 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto" src={AMG} alt="/" width="384" height="512"/>
                <div class="pt-6 md:p-8 text-center md:text-left space-y-4">
                  <blockquote>
                      <p class="text-lg font-medium">
                      Girard Annie-Marie
                      </p>
                  </blockquote>
              <figcaption class="font-medium">
            <div class="text-sky-500 dark:text-sky-400">
            Instructrice  
            </div>
            <div class="text-slate-700 dark:text-slate-500">
             Suisse
            </div>
            </figcaption>
          </div>            
        </figure>
      </div>
      <div>
                <figure class="border md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800">
                <Image class="w-48 h-48 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto" src={Lebreton} alt="" width="384" height="512"/>
                <div class="pt-6 md:p-8 text-center md:text-left space-y-4">
                  <blockquote>
                      <p class="text-lg font-medium">
                      Lebreton Marie-Noëlle
                      </p>
                  </blockquote>
              <figcaption class="font-medium">
            <div class="text-sky-500 dark:text-sky-400">
            Instructrice  
            </div>
            <div class="text-slate-700 dark:text-slate-500">
             Bretagne
            </div>
            </figcaption>
          </div>            
        </figure>
      </div>
            <div>
                <figure class="border md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800">
                <Image class="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto" src="/sarah-dayan.jpg" alt="" width="384" height="512"/>
                <div class="pt-6 md:p-8 text-center md:text-left space-y-4">
                  <blockquote>
                      <p class="text-lg font-medium">
                      Couton Delphine
                      </p>
                  </blockquote>
              <figcaption class="font-medium">
            <div class="text-sky-500 dark:text-sky-400">
            Instructrice  
            </div>
            <div class="text-slate-700 dark:text-slate-500">
             Paris-Niort
            </div>
            </figcaption>
          </div>            
        </figure>
      </div>
          <div>
                <figure class="border md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800">
                <Image class="w-48 h-48 md:w-48 md:h-auto mx-auto" src={Estelle} alt="/" width="384" height="512"/>
                <div class="pt-6 md:p-8 text-center md:text-left space-y-4">
                  <blockquote>
                      <p class="text-lg font-medium">
                      Taraud Estelle
                      </p>
                  </blockquote>
              <figcaption class="font-medium">
            <div class="text-sky-500 dark:text-sky-400">
            Instructrice  
            </div>
            <div class="text-slate-700 dark:text-slate-500">
             Paris
            </div>
            </figcaption>
          </div>            
        </figure>
      </div>
              <div>
                <figure class="border md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800">
                <Image class="w-24 h-24 md:h-auto md:w-auto md:rounded-none rounded-full mx-auto" src="/sarah-dayan.jpg" alt="" width="384" height="512"/>
                <div class="pt-6 md:p-8 text-center md:text-left space-y-4">
                  <blockquote>
                      <p class="text-lg font-medium">
                      Fioux Pierre-Michel
                      </p>
                  </blockquote>
              <figcaption class="font-medium">
            <div class="text-sky-500 dark:text-sky-400">
            Instructeur  
            </div>
            <div class="text-slate-700 dark:text-slate-500">
             Pyrénnées-Atlantiques
            </div>
            </figcaption>
          </div>            
        </figure>
      </div>
      <div>
                <figure class="border md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800">
                <Image class="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto" src="/sarah-dayan.jpg" alt="" width="384" height="512"/>
                <div class="pt-6 md:p-8 text-center md:text-left space-y-4">
                  <blockquote>
                      <p class="text-lg font-medium">
                      Rambaud Cynthia
                      </p>
                  </blockquote>
              <figcaption class="font-medium">
            <div class="text-sky-500 dark:text-sky-400">
            Instructrice  
            </div>
            <div class="text-slate-700 dark:text-slate-500">
             Vendée
            </div>
            </figcaption>
          </div>            
        </figure>
      </div>
      <div className="">
                <figure class="border md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800">
                <Image class="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto" src="/sarah-dayan.jpg" alt="" width="384" height="512"/>
                <div class="pt-6 md:p-8 text-center md:text-left space-y-4">
                  <blockquote>
                      <p class="text-lg font-medium">
                      Pesnel Jérôme
                      </p>
                  </blockquote>
              <figcaption class="font-medium">
            <div class="text-sky-500 dark:text-sky-400">
            Instructeur  
            </div>
            <div class="text-slate-700 dark:text-slate-500">
             Basse Normandie
            </div>
            </figcaption>
          </div>            
        </figure>
      </div>  
      </div>
   
 </div>
    )
}

export default ListInst