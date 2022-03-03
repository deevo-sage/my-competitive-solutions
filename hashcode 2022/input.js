const takeInput = (lines, contributers, projects) => {
  let noOfContri, noOfProject;
  [noOfContri, noOfProject] = lines[0].split(" ").map((item) => parseInt(item));
  let line = 0;
  let i = 0;
  while (i < noOfContri) {
    line++;
    const person = { name: "", skills: {} };
    let [name, skills] = lines[line].split(" ");
    person.name = name;

    for (let j = 0; j < parseInt(skills); j++) {
      line++;
      let [skill, temp] = lines[line].split(" ");
      let level = parseInt(temp);
      person.skills[skill] = level;
    }
    contributers.push(person);
    // console.log({ line, i, noOfContri });
    i++;
  }
  let j = 0;
  while (j < noOfProject) {
    line++;
    let [name, days, score, bestBefore, roles] = lines[line].split(" ");
    days = parseInt(days);
    score = parseInt(score);
    bestBefore = parseInt(bestBefore);
    roles = parseInt(roles);
    const roleObj = {};
    for (let k = 0; k < roles; k++) {
      line++;
      let [name, skill] = lines[line].split(" ");
      skill = parseInt(skill);
      // roleObj[name] = skill;
      if (roleObj[name]===undefined) {
        roleObj[name] = [skill];
      } else {
        roleObj[name].push(skill);
      }
    }
    projects.push({ name, roles: roleObj, days, score, bestBefore });
    j++;
  }
  //   // console.log(contributers);
  //   // console.log(projects);
};
module.exports = {
  takeInput,
};
