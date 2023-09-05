interface IFooter {
  author: string;
  year: number;
}

const Footer = ({ author, year }: IFooter) => {
  return (
    <footer>
      <img 
          height = {200}
          src = "https://i.ytimg.com/vi/hWyhvVcKGKY/maxresdefault.jpg"
          alt="Super Nenechi and her wife Wamy"
      />
      <p> Copyright {author} {year}</p>
    </footer>
  )
};

export default Footer;
