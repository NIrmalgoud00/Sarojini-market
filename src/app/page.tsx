import MaxWidthWipper from "@/components/MaxWidthWipper";
import { Button, buttonVariants } from "@/components/ui/button";
import { ArrowDownToLine, CheckCircle, Leaf } from "lucide-react";
import Link from "next/link";

const perks = [
  {
    name: "Instant Delivery",
    Icon: ArrowDownToLine,
    description: 'Get your assets to your email in seconds and download then right away.'
  },
  {
    name: "Guarteed Quality",
    Icon: CheckCircle,
    description: 'Every assets on our platform is verified  by our tean to ensure our higest quality standards.Not happy? We offer a 30-day refund guarantee'
  },
  {
    name: "For the Planet",
    Icon: Leaf,
    description: "We've pledged 15 of sales to the preservation and restoration of the natural."
  },

]

export default function Home() {
  return (<>
    <MaxWidthWipper>
      <div className="py-20 mx-auto text-center flex flex-col items-center max-w-3xl">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">Your marketplace for high-quality{' '}
          <span className="text-blue-600">digital assets</span>
          .
        </h1>
        <p className="mt-6 text-lg max-w-prose text-muted-foreground">
          Welcome to Sarojini Market. Every asset on our platform is verified by our team to ensure our  hightest quality standards.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 mt-6">
          <Link href='/product' className={buttonVariants()}>Browse Trending</Link>
          <Button variant='ghost'>Our quality promise &rarr;</Button>
        </div>
      </div>

      {/* product list */}

    </MaxWidthWipper>


    <section className="border-t border-gary-200 bg-gray-50">
      <MaxWidthWipper className="py-20">
        <div className="grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-6">
          {
            perks.map((prek) => {
              return(
                <div key={prek.name} className="text-center md:flex md:items-start md:text-left lg:block lg:text-center">
                  <div className="md:flex-shrink-0 flex justify-center">
                    <div className="h-16 w-16 flex items-center justify-center rounded-full bg-blue-100 text-blue-900">
                      {
                        <prek.Icon className="w-1/3 h-1/3"/>
                      }
                    </div>
                  </div>

                  <div className="mt-6 md:ml-4 md:mt-0 lg:ml-0 lg:mt-6">
                    <h3 className="text-base font-medium text-gray-900">
                      {prek.name}
                    </h3>
                    <p className="mt-3 text-sm text-muted-foreground">
                      {prek.description}
                    </p>
                  </div>
                </div>
              )
            })
          }
        </div>
      </MaxWidthWipper>
    </section>
  </>
  );
}

