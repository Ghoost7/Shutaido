import React from "react";
import Image from "next/image";

const ListAnim = () => {
    return ( 
        <div className="max-w-[1240px] mx-auto text-center py-24">          
                    <div className="grid grid-rows-2 md:grid-rows-2 sm:grid-rows-2 gap-2 p-4">
                  <div>
                <figure class="border md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800">
                <Image class="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto" src="/sarah-dayan.jpg" alt="" width="384" height="512"/>
                <div class="pt-6 md:p-8 text-center md:text-left space-y-4">
                  <blockquote>
                      <p class="text-lg font-medium">
                      Charron Christelle
                      </p>
                  </blockquote>
                    <figcaption class="font-medium">
                  <div class="text-sky-500 dark:text-sky-400">
                  Animatrice
              </div>
              <div class="text-slate-700 dark:text-slate-500">
                Mont-de-Marsan
              </div>
            </figcaption>
          </div>            
        </figure>
      </div>
      
            
                <figure class="border md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800">
                <Image class="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto" src="/sarah-dayan.jpg" alt="" width="384" height="512"/>
                <div class="pt-6 md:p-8 text-center md:text-left space-y-4">
                  <blockquote>
                      <p class="text-lg font-medium">
                      Cuq Nathalie
                      </p>
                  </blockquote>
                    <figcaption class="font-medium">
                  <div class="text-sky-500 dark:text-sky-400">
                  Animatrice
              </div>
              <div class="text-slate-700 dark:text-slate-500">
                Pyrénées-Atlantique
              </div>
            </figcaption>
          </div>            
        </figure>
      </div>
    </div>
   
    )
}

export default ListAnim