import React, { useState, useContext, useEffect, } from "react";
import { useParams } from "react-router-dom";
import { WorldContext } from "../../shared/context/WorldContext";
import { useHttpRequest } from "../../shared/hooks/request-hook";
import WorldHeading from "../components/WorldHeading";
import SubjectDesc from "../components/SubjectDesc";
import MainTitle from "../../shared/Components/PageComponents/MainTitle";
import MainNavigation from "../../shared/navigation/MainNavigation";
import "./WorldSubjectPage.css";
import SubjectEntryTable from "../components/SubjectEntryTable";

const WorldSubjectPage = (props) => {
  const subjects = [
    {
      type: "country",
      name: "Countries",
      img: "https://img.freepik.com/free-photo/two-travelers-discovered-ruins-ancient-city-dense-forest-3d-illustration_456031-166.jpg?w=740&t=st=1680580227~exp=1680580827~hmac=752e2f77c64e456d8ba6a8397b8c3f54d08ff51620dac7e62dd1be9324a3c025",
      desc: "Here you can add details regarding the countries in your worlds. The laws which they follow, the cities of prominence and the leadership type found there.",
    },
    {
      type: "religion",
      name: "Religions",
      img: "https://img.freepik.com/free-vector/maya-square-set-with-civilization-culture-symbols-flat-isolated-vector-illustration_98292-3398.jpg?w=740&t=st=1680580352~exp=1680580952~hmac=c55d478820817e6b76a575c269b69575360db5fbb30ccc7b60b3c1786aae4bf6",
      desc: "Here you can add details regarding the countries in your worlds. The laws which they follow, the cities of prominence and the leadership type found there.",
    },
    {
      type: "mythology",
      name: "Mythology",
      img: "https://img.freepik.com/free-photo/fantastic-illustration-ancient-chinese-themes_456031-89.jpg?w=740&t=st=1680580415~exp=1680581015~hmac=e58356c055f3d4bccb43bb0a65d5fd56d2a6547bfeaf14f185e2ba492c694b1f",
      desc: "Here you can add details regarding the countries in your worlds. The laws which they follow, the cities of prominence and the leadership type found there.",
    },
    {
      type: "conflict",
      name: "Conflicts",
      img: "https://img.freepik.com/premium-photo/roguelike-video-game-flat-illustration_250484-3629.jpg?w=740",
      desc: "Here you can add details regarding the countries in your worlds. The laws which they follow, the cities of prominence and the leadership type found there.",
    },
    {
      type: "magic",
      name: "Magic",
      img: "https://img.freepik.com/free-vector/wizard-magic-isometric-flowchart_1284-72567.jpg?w=740&t=st=1680580315~exp=1680580915~hmac=4375e58ab8a8220d9a315e0b7c5cd83f95d392f6a3fed86815f850c1eb5d455f",
      desc: "Here you can add details regarding the countries in your worlds. The laws which they follow, the cities of prominence and the leadership type found there.",
    },
    {
      type: "ecology",
      name: "Ecology",
      img: "https://img.freepik.com/free-photo/green-growing-trees-circle-generative-ai_169016-28712.jpg?w=740&t=st=1680580450~exp=1680581050~hmac=68a52cb115e578d66faca38cefbf8732874df3833ba63b10a727dddd6aeaafbd",
      desc: "Here you can add details regarding the countries in your worlds. The laws which they follow, the cities of prominence and the leadership type found there.",
    },
    {
      type: "faction",
      name: "Factions",
      img: "https://img.freepik.com/free-vector/set-fantasy-game-shields-isolated-background_107791-18097.jpg?w=740&t=st=1680580538~exp=1680581138~hmac=18ccd58f7874f352951ae485912fb7e727e95a8f576e1439db445540922a924b",
      desc: "Here you can add details regarding the countries in your worlds. The laws which they follow, the cities of prominence and the leadership type found there.",
    },
    {
      type: "cosmology",
      name: "Cosmology",
      img: "https://img.freepik.com/free-vector/knight-magic-portal-stone-frame-mountain-landscape-night-vector-cartoon-fantasy-illustration-with-man-medieval-costume-with-spear-ancient-arch-with-mystic-blue-glow_107791-5203.jpg?w=740&t=st=1680580620~exp=1680581220~hmac=8166ec604916f9102291a46a73ba4682ed1e22743c9721fd5930092d69aece58",
      desc: "Here you can add details regarding the countries in your worlds. The laws which they follow, the cities of prominence and the leadership type found there.",
    },
    {
      type: "misc",
      name: "Misc",
      img: "https://img.freepik.com/free-vector/video-game-element-collection_23-2150237447.jpg?w=740&t=st=1680580588~exp=1680581188~hmac=d0304aef847df13bd7e13cb62db3e7ae9d33af3f4978ddc4c0fabf84f69d2d84",
      desc: "Here you can add details regarding the countries in your worlds. The laws which they follow, the cities of prominence and the leadership type found there.",
    },
  ];

  const DUMMY_ENTRY = [
    {
      id: "entry1",
      title: "Lorem ipsum dolor sit amet.",
      desc: "Integer congue, tellus a luctus aliquam, ligula risus dignissim libero, sed tincidunt libero neque vel ante. Praesent laoreet est ac mauris sollicitudin, non scelerisque nibh vehicula. Cras sodales mi hendrerit arcu aliquam, sit amet malesuada risus vehicula. Donec molestie mattis justo. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Ut porta ultrices sapien sit amet eleifend. Vivamus volutpat auctor eros, et suscipit velit feugiat id.",
      imgSrc:
        "https://fastly.picsum.photos/id/736/600/400.jpg?hmac=zAKOwuTzcDBL4AZltOSkrukG_BvEkN7_u-sr14sJP7Y",
      subjects: [
        {title: "The adventure of Scotch",}, {title: "The event with the fairy"}, {title: "Rumble in the jungle"}
      ]
    },
    {
      id: "entry2",
      title: "Proin nisi purus, egestas eu dui non.",
      desc: "Aenean tempor, sem vitae porttitor placerat, velit tortor aliquet nulla, sit amet condimentum elit ex ut tortor. Pellentesque efficitur diam sed justo accumsan, sed ultrices velit luctus. Vestibulum augue magna, rhoncus quis lobortis ut, porta sed urna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam magna leo, porttitor ut leo non, porttitor facilisis sapien. Suspendisse est erat, dapibus quis urna at, aliquet eleifend nisl. Morbi consectetur, neque sit amet lacinia lobortis, quam eros maximus ipsum, in porttitor eros nibh elementum justo. Nulla convallis vestibulum lacus vel ultricies. Sed euismod rhoncus placerat. Phasellus venenatis purus ut aliquam ultricies.",
      imgSrc:
        "https://fastly.picsum.photos/id/736/600/400.jpg?hmac=zAKOwuTzcDBL4AZltOSkrukG_BvEkN7_u-sr14sJP7Y",
      subjects: [
        {title: "Showdown with The Fox"}
      ]
    },
    {
      id: "entry3",
      title: "Proin nisi purus, egestas eu dui non.",
      desc: "Aenean tempor, sem vitae porttitor placerat, velit tortor aliquet nulla, sit amet condimentum elit ex ut tortor. Pellentesque efficitur diam sed justo accumsan, sed ultrices velit luctus. Vestibulum augue magna, rhoncus quis lobortis ut, porta sed urna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam magna leo, porttitor ut leo non, porttitor facilisis sapien. Suspendisse est erat, dapibus quis urna at, aliquet eleifend nisl. Morbi consectetur, neque sit amet lacinia lobortis, quam eros maximus ipsum, in porttitor eros nibh elementum justo. Nulla convallis vestibulum lacus vel ultricies. Sed euismod rhoncus placerat. Phasellus venenatis purus ut aliquam ultricies.",
      imgSrc:
        "https://fastly.picsum.photos/id/736/600/400.jpg?hmac=zAKOwuTzcDBL4AZltOSkrukG_BvEkN7_u-sr14sJP7Y",
      subjects: []
    },
    {
      id: "entry4",
      title: "Proin nisi purus, egestas eu dui non.",
      desc: "Aenean tempor, sem vitae porttitor placerat, velit tortor aliquet nulla, sit amet condimentum elit ex ut tortor. Pellentesque efficitur diam sed justo accumsan, sed ultrices velit luctus. Vestibulum augue magna, rhoncus quis lobortis ut, porta sed urna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam magna leo, porttitor ut leo non, porttitor facilisis sapien. Suspendisse est erat, dapibus quis urna at, aliquet eleifend nisl. Morbi consectetur, neque sit amet lacinia lobortis, quam eros maximus ipsum, in porttitor eros nibh elementum justo. Nulla convallis vestibulum lacus vel ultricies. Sed euismod rhoncus placerat. Phasellus venenatis purus ut aliquam ultricies.",
      imgSrc:
        "https://fastly.picsum.photos/id/736/600/400.jpg?hmac=zAKOwuTzcDBL4AZltOSkrukG_BvEkN7_u-sr14sJP7Y",
      subjects: [{title: "Way of the fayth"}, {title: "Dreams of Zanarkand"}]
    },
  ];

  const [loadingWorld, setLoadingWorld] = useState(true);
  const [tableData, setTableData] = useState([]);
  const { sendRequest } = useHttpRequest();
  const [selectedSubject, setSelectedSubject] = useState({});
  const subjectType = useParams().subjectType;
  const worldId = useParams().worldId;
  const world = useContext(WorldContext);

  useEffect(() => {
    const fetchWorld = async () => {
      try {
        const responseData = await sendRequest(
          `http://localhost:5000/worlds/getone/${worldId}`
        );
        world.changeWorld(responseData.world);
        setLoadingWorld(false);
      } catch (err) {
      }
    };
    const fetchSubjects = async () => {
      try {
        const responseData = await sendRequest(
          `http://localhost:5000/worlds/getallsubjects/${subjectType}/${worldId}`
        );
        setTableData(responseData.subjects);
      } catch (err) {}
    }
    fetchWorld();
    fetchSubjects();
  }, []);

  useEffect(() => {
    setSelectedSubject(
      subjects.filter((subject) => subject.type === subjectType)[0]
    );
  }, [subjectType]);

  return (
    <div className="page-container">
      {!loadingWorld && (
        <WorldHeading campaignBanner={selectedSubject.img}>
          <MainNavigation clear={true} />
          <MainTitle
            titleType="page-title main-title"
            content={
              selectedSubject.name + " In " + world.currentWorld.worldName
            }
          />
          <SubjectDesc desc={selectedSubject.desc} />
        </WorldHeading>
      )}
      <div className="subject-entry-container">
        <SubjectEntryTable tableData={tableData}/>
      </div>
    </div>
  );
};

export default WorldSubjectPage;
