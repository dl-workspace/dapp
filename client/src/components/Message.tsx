function Message(){
  const name: string = 'Duc';
  return <h1>Hello {name ? name : 'World'}</h1>;
}

export default Message;