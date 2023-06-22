example = list()
elements = list("a", "b", "c")
indices = seq_along(elements)
print(elements)
print(indices)

indices |>
  purrr::map(~{
    browser()
    example[elements[[.x]]] <- .x
  }) 

print(example)

