 function addTask() {
          const taskInput = document.getElementById("taskInput");
      const taskText = taskInput.value.trim();

      if (taskText === "") {
        alert("Please enter a task!");
        return;
      }

      const li = document.createElement("li");

      const span = document.createElement("span");
      span.textContent = taskText;
      li.appendChild(span);

      const actions = document.createElement("div");
      actions.className = "actions";

    
      const completeBtn = document.createElement("button");
      completeBtn.textContent = "✓";
      completeBtn.className = "complete";
      completeBtn.onclick = function () {
        li.classList.toggle("completed");
      };

      const editBtn = document.createElement("button");
      editBtn.textContent = "Edit";
      editBtn.className = "edit";
      editBtn.onclick = function () {
        const newTask = prompt("Edit task:", span.textContent);
        if (newTask !== null && newTask.trim() !== "") {
          span.textContent = newTask;
        }
      };
      const deleteBtn = document.createElement("button");
      deleteBtn.textContent = "X";
      deleteBtn.className = "delete";
      deleteBtn.onclick = function () {
        li.remove();
      };

      actions.appendChild(completeBtn);
      actions.appendChild(editBtn);
      actions.appendChild(deleteBtn);

      li.appendChild(actions);

      document.getElementById("taskList").appendChild(li);

      taskInput.value = "";
    }