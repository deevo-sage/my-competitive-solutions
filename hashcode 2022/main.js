const { takeInput } = require("./input");

// [{ name: "", skills: {"skill":"level"} }];
let contributers = [];
// [{
// name:"",
//  duration:number,
//  score :number,
//  bestBefore:number,
//  roles:{"skill":"level"}
// ]}]
let projects = [];

//{"project":{daysLeft:number,people:{}}}

let onGoing = {};
let notDoneProject = [];
let loopingCount = 0;
const getPriority = (project) => {
  return project.bestBefore;
};

const genOutput = (project, level = 1, arr) => {
  let outString = project.name + "\n";
  let totalCount = 0;
  let count = 0;
  const roles = Object.entries(project.roles);
  let line = "";
  const rolesNotFound = {};
  const contrisFound = [];
  const contrisMeta = [];
  const contrisName = [];
  for (let i = 0; i < roles.length; i++) {
    for (let k = 0; k < roles[i][1].length; k++) {
      totalCount++;
      const skill = { name: roles[i][0], level: roles[i][1][k] };
      let flag = 0;
      const toParse =
        level === 1
          ? contributers.filter((item) => {
              const flag = !contrisName.includes(item.name);
              return flag;
            })
          : arr.filter((item) => {
              const flag = !contrisName.includes(item.name);
              return flag;
            });
      for (let j = 0; j < toParse.length; j++) {
        if (
          toParse[j].skills[skill.name] &&
          toParse[j].skills[skill.name] >= skill.level
        ) {
          if (toParse[j].name === "NellyY") {
            console.log(toParse[j]);
            console.log(project.roles);
          } // if (contributers[j].name === "SergeyV")
          line += toParse[j].name + " ";
          count++;
          contrisFound.push(toParse[j]);
          if ((toParse[j].skills[skill.name] = skill.level))
            contrisMeta.push({
              skill: skill.name,
              idx: contributers.findIndex((item) => {
                const f = item.name === toParse[j].name;
                return f;
              }),
            });
          contrisName.push(toParse[j].name);
          flag = 1;
          break;
        }
      }
      if (flag === 0) {
        rolesNotFound[roles[i][0]] = roles[i][1][k];
      }
    }
  }
  // console.log(count, totalCount, contrisName);

  outString += line.trim() + "\n";
  if (count === totalCount) {
    loopingCount++;
    for (let i = 0; i < contrisMeta.length; i++) {
      contributers[contrisMeta[i].idx].skills[contrisMeta[i].skill]++;
    }
    if (level === 2) {
      notDoneProject = notDoneProject.filter(
        (item, i) => item.project.name !== project.name
      );
    }
    if (level === 1) {
      for (let i = 0; i < notDoneProject.length; i++) {
        outString += genOutput(notDoneProject[i].project, 2, contrisFound);
      }
    }
    return outString;
  }
  if (level === 1) notDoneProject.push({ project, rolesNotFound });
  return "";
};

const init = () => {
  projects = [];
  contributers = [];
  loopingCount = 0;
  onGoing = {};
  notDoneProject = [];
};

const logic = (lines) => {
  init();
  takeInput(lines, contributers, projects);
  projects.sort((a, b) => {
    return getPriority(a) - getPriority(b);
  });
  let output = "";
  for (let i = 0; i < projects.length; i++) {
    output += genOutput(projects[i]);
  }

  output = loopingCount + "\n" + output;
  // console.log({ output });
  console.log(contributers.filter((item) => item.name === "SergeyV"));
  console.log("came");
  return output;
};

module.exports = { logic };
