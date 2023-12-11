import React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import prep_pdf from "../assets/home-prep.pdf"

const prep = () => {
  return (
    <Layout>
      <h2 className="text-center">
        <i class="bi bi-house-check pe-2"></i>Property Prep
      </h2>
      <div>
        <p>
          Everyone wants their property to look its best. Here are some
          suggestions for getting your property ready to look its best and make
          the photo shoot go smoothly. Many of these things also apply to making
          sure your home shows well to potential buyers. Below is a list of
          items to attend to to make the property visually appealing and ready
          for photographing. There is a link at the bottom to a PDF to print
          this as a checklist.
        </p>
        <ul>
          <li>The photo-shoot will take approximately 2-3 hours.</li>
          <li>
            I will be photographing both the inside and outside of the home.
          </li>
          <li>I’ll be photographing all of the major rooms.</li>
          <li>
            If there are special features of the home that are not obvious
            please let me know about these so I can include them in the shoot.
          </li>
          <li>
            Let me know if the home contains valuable works of art. I can edit
            photos to make these items unrecognizable.
          </li>
        </ul>
        <h2>General Prep</h2>
        <ul>
          <li>
            <b>Be shoot-ready:</b> Cleaning and staging needs to be done before
            I arrive, preferably the day before your photoshoot. I may move
            small items (flowers, small pictures, etc.) to improve photo
            composition, but larger items need to be in place before I arrive,
            and staging accessories need to be in place as well.
          </li>{" "}
          <li>
            <b>Secure or remove pets:</b> I love pets but we can’t have them
            around for your photoshoot. Dogs must be secured or off the property
            to ensure the safety of myself and my equipment. MLS rules also
            prohibit people and pets from being in pictures. Cats should be
            secured as well, although they usually pose fewer problems than dogs
            (cats often just hide). It's also a good idea to hide pet food and
            water bowls as well.
          </li>{" "}
          <li>
            <b>Plan not to be seen:</b> All occupants should plan on either
            being off the property or remain in areas where they can't be seen
            during the photoshoot. Rooms overlap in the photos, people can cause
            shadows and reflections, and there is risk to equipment that will be
            setup throughout the property.
          </li>{" "}
          <li>
            <b>Use the garage for storage:</b> I normally don’t shoot garages,
            unless it has special features, so this is a great place to store
            items you’d like to hide
          </li>
        </ul>
        <h2>Outside Prep</h2>
        <ul>
          <li>
            <b>Clear the cars:</b> Make sure no cars are in the driveway. If
            possible, also move cars from the street in front of the home. We
            want as clear a view as possible of your property.
          </li>{" "}
          <li>
            <b>Hide trashcans</b>: Trashcans can be placed on the side of the
            property or in the garage.
          </li>
          <li>
            <b>Hide hoses</b>: Do this the day before the shoot since hoses can
            drip water onto the pavement when being moved, leaving puddles in
            your pictures.
          </li>
          <li>
            <b>Prep the yard</b>: Do at least 24 hours prior to your photoshoot.
            Yard should me mowed and cleared of any toys, tools, etc. Sweep
            driveways, sidewalks, and patios.
          </li>
          <li>
            <b>Turn off sprinklers</b>: Do not water the day of the shoot to
            prevent puddles on pavement.
          </li>
          <li>
            <b>Pick up poop</b>: If you have a dog, make sure that all of their
            droppings are cleared from the yard.
          </li>
          <li>
            <b>Prep pool and spa</b>: If you have a pool and/or spa, please have
            them clean with covers removed. For spas, provide instructions to
            the realtor on how to turn it on.
          </li>
          <li>
            <b>Prep water features</b>: If you have fountains, waterfalls, etc.,
            please clean them and provide instructions to the realtor on how to
            turn them on.
          </li>
          <li>
            <b>Remove for-sale sign</b>: The for-sale sign should be removed
            from the property (if possible) by the realtor if it has already
            been installed. Visible signs violate MLS photo rules, and they
            can’t always be edited out. It’s best to schedule sign installation
            for after the photoshoot.
          </li>
          <li>
            <b>Clean patio furniture</b>: Dust and remove cobwebs from all
            outdoor furniture. Do not hose down your furniture the day of your
            shoot, since this can create puddles.
          </li>
        </ul>{" "}
        <h2>Inside Prep</h2>
        <ul>
          <li>
            <b>Declutter kitchen</b>: A few items on the counters are usually
            fine, but dishes, sponges, rags, etc. should be put away. It's best
            to remove all magnets, pictures, etc. from the refrigerator and
            remove throw rugs from the floor.
          </li>{" "}
          <li>
            <b>Declutter bathrooms</b>: Toothpaste, toothbrushes, razors, and
            other "personal" items should be hidden. Decorative unused soaps,
            candles, flowers, etc. are preferred. It’s also good to remove all
            throw rugs from the floor.
          </li>
          <li>
            <b>Prep bedrooms</b>: All bedrooms should have their beds made and
            items put away.
          </li>
          <li>
            <b>Hide trashcans</b>: Trashcans can distract so it’s best to hide
            all of them in closets or the garage.
          </li>
          <li>
            <b>Hide portable fans</b>: Ceiling fans are selling items but
            portable fans can give the wrong impression. It’s best to hide all
            portable fans in closets or the garage.
          </li>
          <li>
            <b>Hide cords and remotes</b>: Sometimes electrical cords can’t be
            hidden, but you will have more appealing pictures if you can hide TV
            remotes, game consoles, and any noticeable cords.
          </li>
          <li>
            <b>Clear entryways</b>: Remove all shoes, umbrellas, and similar
            items from entryways.
          </li>
          <b>Open blinds with views</b>: Your indoor photos will show outdoor
          views if there are views, or just light if a window looks onto a
          neighbor or other unappealing view.
          <li>
            <b>Turn on lights</b>: Before I arrive, please make sure all
            interior lights are turned on. If need-be, please replace all
            burned-out bulbs at least 24 hours before the photoshoot.
          </li>
          <li>
            <b>Turn off ceiling fans</b>: Before I arrive, please make sure all
            ceiling fans are turned off.
          </li>
        </ul>
        <h2>Twilight Prep</h2>{" "}
        <p>
          If you’ve scheduled a twilight shoot the following are additional
          items to prepare before I arrive. Note that twilights have tight
          schedules to ensure optimal lighting, so please make sure all of these
          items are ready before I arrive.
        </p>
        <ul>
          <li>
            <b>Turn on all interior and exterior lights</b>: All lights
            throughout the property need to be turned on. Please replace all
            burned-out bulbs at least 24 hours before the photoshoot.
          </li>
          <li>
            <b>Turn on spas and remove covers</b>: If you have a spa, remove the
            cover, and turn it before I arrive. Turn on the lights in the spa as
            well.
          </li>
          <li>
            <b>Turn on pool lights</b>: If you have a pool, turn on the pool
            lights before I arrive.
          </li>
          <li>
            <b>Turn on water features</b>: If you have fountains, waterfalls, or
            similar water features, please turn them on before I arrive.
          </li>
        </ul>
        <p>
          Thank you for your time and patience to go through this checklist! If
          you have any questions, please feel free to contact me.{" "}
        </p>
        <div className="m-3">
          <a href={prep_pdf} className="m-2">
            Home Prep Checklist PDF to print
          </a>
        </div>
      </div>
    </Layout>
  )
}

export const Head = () => {
  return (
    <>
      <Seo title="Property Prep" />
    </>
  )
}

export default prep
