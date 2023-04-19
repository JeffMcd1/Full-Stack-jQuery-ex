$("#form-tarefa").submit(function (event) {
  event.preventDefault();

  const novaTarefa = $("<li>").text($("#input-tarefa").val());

  // adiciona a nova tarefa à lista de tarefas
  $("#lista-tarefas").append(novaTarefa);

  $("#input-tarefa").val("");
});
$("#lista-tarefas").on("click", "li", function () {
  $(this).toggleClass("feito");
});
