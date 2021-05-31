import Poster from "data/about.jpg";

const Content = () => {
  return (
    <div className="container-about">
      <h3 className="head">About Us</h3>
      <img className="poster-about" src={Poster} alt="avenger poster" />
      <section className="content-about">
        <h4 className="sub-head">Our Story</h4>
        <p className="para-about">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
          mollitia ullam esse aliquam eos nulla ut, possimus laboriosam non ad
          similique officia, ipsa nemo cumque quasi ratione provident
          exercitationem iusto. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Reiciendis iure ratione repellendus! Ducimus
          quisquam, aut voluptas veritatis quibusdam ipsam illum delectus?
          Necessitatibus unde molestiae animi ipsam quis possimus totam
          corporis. Fuga ab unde repellendus modi exercitationem molestiae omnis
          a nobis corporis quibusdam natus quod doloremque voluptatem, nulla
          repellat. Consequatur assumenda aliquid soluta, dolorum veritatis
          deleniti molestiae maxime necessitatibus facilis voluptas.
        </p>
      </section>
    </div>
  );
};

export default Content;
