export default {
  ra: {
    action: {
      delete: "Excluir",
      show: "Exibir",
      list: "Listar",
      save: "Salvar",
      create: "Novo",
      export: "Exportar",
      edit: "Editar",
      cancel: "Cancelar",
      refresh: "Atualizar",
      add_filter: "Adicionar Filtro",
      remove_filter: "Cancelar filtro",
      back: "Voltar",
      sort: "Ordenar",
      undo: "Desfazer",
      add: "Adicionar",
      remove: "Remove",
    },
    boolean: {
      true: "Sim",
      false: "Não",
    },
    page: {
      list: "Listar %{name}",
      edit: "%{name} #%{id}",
      show: "%{name} #%{id}",
      create: "Novo %{name}",
      delete: "Excluir %{name} #%{id}",
      dashboard: "Painel de Controle",
      not_found: "Página não encontrada",
      loading: "Carregando",
    },
    input: {
      file: {
        upload_several: "Solte arquivos aqui, ou clique para selecionar um.",
        upload_single: "Solte um arquivo aqui, ou clique para selecionar.",
      },
      image: {
        upload_several:
          "Arraste alguns arquivos para fazer o upload ou clique para selecionar arquivo",
        upload_single:
          "Arraste um arquivo para upload ou clique em selecionar arquivo.",
      },
      references: {
        all_missing: "Não foi possível encontrar referência para o arquivo.",
        many_missing:
          "Pelo menos uma das referências associadas parece não estar disponível.",
        single_missing: "Referência associada parece não estar disponível.",
      },
    },
    message: {
      yes: "Sim",
      no: "Não",
      are_you_sure: "Tem certeza?",
      about: "Sobre",
      error: "Um erro ocorreu e a sua requisição não pôde ser completada.",
      not_found:
        "Você digitou incorretamente a url ou seguiu um link que não existe.",
      loading: "A página está carregando, aguarde...",
      invalid_form: "Formulário não é válido. Por favor verifique os erros",
      delete_title: "Apagar %{name} #%{id}",
      delete_content: "Tem certeza que deseja apagar este item?",
      bulk_delete_title:
        "Apagar %{name} |||| Apagar %{smart_count} %{name} items",
      bulk_delete_content:
        "Tem certeza que deseja apagar %{name}? |||| Tem certeza que deseja apagar %{smart_count} items?",
    },
    navigation: {
      no_results: "Nenhum resultado encontrado",
      no_more_results:
        "O número de páginas %{page} é o limite. Tente a página anterior.",
      page_out_of_boundaries: "Página %{page} fora o limite",
      page_out_from_end: "Não é possível ir após a última página",
      page_out_from_begin: "Não é possível ir antes da primeira página",
      page_range_info: "%{offsetBegin}-%{offsetEnd} de %{total}",
      page_rows_per_page: "Resultados por página:",
      next: "Próximo",
      prev: "Anterior",
    },
    auth: {
      username: "Email",
      user_menu: "Perfil",
      password: "Senha",
      sign_in: "Logar",
      sign_in_error: "Erro na autenticação, tente novamente.",
      logout: "Sair",
      auth_check_error: "Por favor, faça login para continuar",
    },
    notification: {
      updated: "Item atualizado com sucesso",
      created: "Item criado com sucesso",
      deleted: "Item removido com sucesso!",
      bad_item: "Elemento incorreto",
      item_doesnt_exist: "Esse item não existe mais",
      http_error: "Erro na comunicação com servidor",
      data_provider_error: "Erro interno do servidor. Entre em contato",
      canceled: "Ação cancelada",
    },
    validation: {
      required: "Obrigatório",
      minLength: "Deve ser ter no mínimo %{min} caracteres",
      maxLength: "Deve ter no máximo %{max} caracteres",
      minValue: "Deve ser %{min} ou maior",
      maxValue: "Deve ser %{max} ou menor",
      number: "Deve ser um número",
      email: "Deve ser um email válido",
      oneOf: "Deve ser um dos: %{options}",
      regex: "Deve conter o formato (regexp): %{pattern}",
    },
  },
};
