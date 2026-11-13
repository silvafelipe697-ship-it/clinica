# =========================================================
# PROJETO ACADÊMICO: CLÍNICA VIDA+
# ARQUIVO EXECUTÁVEL: clinica_vida.py
# ESTRUTURA: Listas e Dicionários em Python
# =========================================================

def exibir_menu():
    print("\n" + "="*40)
    print("      CLÍNICA VIDA+ - GESTÃO DE PACIENTES")
    print("="*40)
    print("1. Cadastrar paciente")
    print("2. Ver estatísticas")
    print("3. Buscar paciente pelo nome")
    print("4. Listar todos os pacientes")
    print("5. Sair")
    print("="*40)

def cadastrar_paciente(pacientes):
    print("\n--- CADASTRO DE PACIENTE ---")
    nome = input("Nome do paciente: ").strip()
    if not nome:
        print("Erro: O nome não pode ser vazio!")
        return

    try:
        idade = int(input("Idade (anos): "))
        if idade < 0 or idade > 130:
            print("Erro: Idade inválida!")
            return
    except ValueError:
        print("Erro: A idade deve ser um número inteiro!")
        return

    telefone = input("Telefone de contato: ").strip()
    if not telefone:
        print("Erro: Telefone não pode ser vazio!")
        return

    paciente = {
        "nome": nome,
        "idade": idade,
        "telefone": telefone
    }
    pacientes.append(paciente)
    print(f"Éxito: Paciente '{nome}' cadastrado com sucesso!")

def ver_estatisticas(pacientes):
    print("\n--- ESTATÍSTICAS DA CLÍNICA ---")
    if not pacientes:
        print("Aviso: Nenhum paciente cadastrado no sistema.")
        return

    total = len(pacientes)
    soma_idades = sum(p["idade"] for p in pacientes)
    media_idade = soma_idades / total

    mais_novo = min(pacientes, key=lambda p: p["idade"])
    mais_velho = max(pacientes, key=lambda p: p["idade"])

    print(f"Total de pacientes cadastrados: {total}")
    print(f"Idade média dos pacientes: {media_idade:.1f} anos")
    print(f"Paciente mais novo: {mais_novo['nome']} ({mais_novo['idade']} anos)")
    print(f"Paciente mais velho: {mais_velho['nome']} ({mais_velho['idade']} anos)")

def buscar_paciente(pacientes):
    print("\n--- BUSCAR PACIENTE ---")
    if not pacientes:
        print("Aviso: Nenhum paciente cadastrado no sistema.")
        return

    termo = input("Digite o nome para buscar: ").strip().lower()
    if not termo:
        print("Erro: Termo de busca inválido.")
        return

    encontrados = [p for p in pacientes if termo in p["nome"].lower()]

    if encontrados:
        print(f"\nResultados encontrados ({len(encontrados)}):")
        for idx, p in enumerate(encontrados, 1):
            print(f"{idx}. Nome: {p['nome']} | Idade: {p['idade']} | Tel: {p['telefone']}")
    else:
        print(f"Nenhum paciente encontrado com termo '{termo}'.")

def listar_pacientes(pacientes):
    print("\n--- LISTA DE PACIENTES ---")
    if not pacientes:
        print("Aviso: Nenhum paciente cadastrado.")
        return

    for idx, p in enumerate(pacientes, 1):
        print(f"{idx}. Nome: {p['nome']} | Idade: {p['idade']} | Tel: {p['telefone']}")

def main():
    pacientes = [
        {"nome": "Ana Maria Silva", "idade": 28, "telefone": "(11) 98765-4321"},
        {"nome": "Carlos Rocha", "idade": 64, "telefone": "(11) 97123-8899"},
        {"nome": "Beatriz Mendonça", "idade": 12, "telefone": "(11) 95544-3322"}
    ]

    while True:
        exibir_menu()
        opcao = input("Escolha uma opção (1-5): ").strip()

        if opcao == "1":
            cadastrar_paciente(pacientes)
        elif opcao == "2":
            ver_estatisticas(pacientes)
        elif opcao == "3":
            buscar_paciente(pacientes)
        elif opcao == "4":
            listar_pacientes(pacientes)
        elif opcao == "5":
            print("\nEncerrando o sistema Clínica Vida+. Até logo!")
            break
        else:
            print("\nOpção inválida! Escolha um número de 1 a 5.")

if __name__ == "__main__":
    main()