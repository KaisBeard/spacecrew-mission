import React, { useEffect, useState } from "react";

export default function CrewMembers() {
  const [data, getData] = useState([]);
  const [selectedPeople, setSelectedPeople] = useState([]);

  const API = "https://space-crew.herokuapp.com/crewmembers";

  const fetchData = () => {
    fetch(API)
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        getData(res);
      });
  };

  useEffect(() => {
    fetchData();
    getData(
      data.map((post) => {
        return {
          select: false,
          id: post.id,
        };
      })
    );
  }, []);

  const onChangeSelectedPerson = (id, Name) => {
    const isSelected = selectedPeople.indexOf(id, Name) > -1;

    const newSelectedPeople = isSelected
      ? selectedPeople.filter((person) => person != id)
      : [...selectedPeople, id, Name];

    setSelectedPeople(newSelectedPeople);
  };

  console.log(selectedPeople);

  return (
    <div className="container mt-5">
      <div className="posts  scrollbar scrollbar-success  ">
        {data.map((post, index) => (
          <div
            key={index}
            className="decoration force-overflow overflow-auto m-3 "
          >
            <div className="d-flex text-center flex-row flex-wrap justify-content-between">
              <div>
                <h4 className="p-3 fw-bold ">{post.Name} </h4>
                <p className="p-1">
                  Origin <br /> {post.Origin}{" "}
                </p>
              </div>
              <div>
                <p className="p-1">
                  Leadership <br /> {post.Leadership}{" "}
                </p>
                <p className="p-1">
                  Mining <br /> {post.Mining}{" "}
                </p>
              </div>
              <div>
                <p className="p-1">
                  Farming <br /> {post.Farming}{" "}
                </p>
                <p className="p-1">
                  Building <br /> {post.Building}{" "}
                </p>
              </div>
              <div>
                <p className="p-1">
                  Combat <br /> {post.Combat}{" "}
                </p>
                <p className="p-1">
                  Science <br /> {post.Science}{" "}
                </p>
              </div>
              <p className="p-1">
                Fertility <br /> {post.Fertility}{" "}
              </p>
              <p>
                {" "}
                <input
                  style={{ backgroundColor: "green" }}
                  type="checkbox"
                  className="checkMark bg-success"
                  checked={selectedPeople.indexOf(post._id, post.Name) > -1}
                  onChange={() => onChangeSelectedPerson(post._id, post.Name)}
                />
              </p>
            </div>
          </div>
        ))}
      </div>
      <br />
    </div>
  );
}

/*
(event) => {
                    let checked = event.target.checked;
                    getData(
                      data.map((data) => {
                        if (post.id === data.id) {
                          data.select = checked;
                          console.log(data.select);
                        }
                        return data;
                      })
                    );
                  }
*/
