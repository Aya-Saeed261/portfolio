const Story = () => {
  const calcAge = () => {
    const dateOfBirth = new Date("01/26/1998");
    const dateNow = Date.now();
    const dif = dateNow - dateOfBirth;
    const age = Math.floor(dif / 1000 / 60 / 60 / 24 / 365);
    return age;
  };

  return (
    <p className="mb-0">
      Hello! My name is Aya. I'm {calcAge()} years old. I studied electrical
      engineering in college but I never felt that I want to pursue a career in
      it. After graduation, I stumbled upon a web development course, I took it
      and loved it so much I decided to become a frontend developer.
      <br /> I'm interested in the different technologies I can build a website
      with and in how the web works.
    </p>
  );
};

export default Story;
