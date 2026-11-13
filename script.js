// =========================================================================
// 1. CÓDIGO PYTHON EXECUTÁVEL (clinica_vida.py)
// =========================================================================
const PYTHON_CODE = `#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Sistema de Cadastro e Estatísticas de Pacientes - Clínica Vida+
Arquivo: clinica_vida.py
Estruturas utilizadas: Listas e Dicionários
"""

def exibir_menu():
    print("\\n" + "=" * 46)
    print("       CLÍNICA VIDA+ | GESTÃO DE PACIENTES")
    print("=" * 46)
    print("1. Cadastrar paciente")
    print("2. Ver estatísticas")
    print("3. Buscar paciente pelo nome")
    print("4. Listar todos os pacientes")
    print("5. Sair")
    print("=" * 46)


def cadastrar_paciente(pacientes):
    print("\\n--- CADASTRAR NOVO PACIENTE ---")
    while True:
        nome = input("Nome completo: ").strip()
        if nome:
            break
        print("[Erro] O nome não pode ficar em branco.")

    while True:
        idade_str = input("Idade (anos): ").strip()
        try:
            idade = int(idade_str)
            if 0 <= idade <= 130:
                break
            print("[Erro] Informe uma idade válida entre 0 e 130 anos.")
        except ValueError:
            print("[Erro] Entrada inválida. Digite apenas números inteiros para a idade.")

    while True:
        telefone = input("Telefone (ex: (41) 99999-0000): ").strip()
        if telefone:
            break
        print("[Erro] O telefone não pode ficar em branco.")

    paciente = {
        "nome": nome,
        "idade": idade,
        "telefone": telefone
    }
    pacientes.append(paciente)
    print(f"\\n[Sucesso] Paciente '{nome}' cadastrado com sucesso!")


def ver_estatisticas(pacientes):
    print("\\n--- ESTATÍSTICAS DA CLÍNICA ---")
    if not pacientes:
        print("[Aviso] Nenhum paciente cadastrado no momento.")
        return

    total = len(pacientes)
    soma_idades = sum(p["idade"] for p in pacientes)
    media_idade = soma_idades / total
    mais_novo = min(pacientes, key=lambda p: p["idade"])
    mais_velho = max(pacientes, key=lambda p: p["idade"])

    print(f"Total de pacientes cadastrados : {total}")
    print(f"Idade média dos pacientes      : {media_idade:.1f} anos")
    print(f"Paciente mais novo             : {mais_novo['nome']} ({mais_novo['idade']} anos)")
    print(f"Paciente mais velho            : {mais_velho['nome']} ({mais_velho['idade']} anos)")


def buscar_paciente(pacientes):
    print("\\n--- BUSCAR PACIENTE PELO NOME ---")
    if not pacientes:
        print("[Aviso] A lista de pacientes está vazia.")
        return

    termo = input("Digite o nome (ou parte do nome) para busca: ").strip().lower()
    if not termo:
        print("[Erro] Termo de busca inválido.")
        return

    encontrados = [p for p in pacientes if termo in p["nome"].lower()]

    if not encontrados:
        print(f"[Aviso] Nenhum paciente encontrado com o termo '{termo}'.")
    else:
        print(f"\\nForam encontrado(s) {len(encontrados)} registro(s):")
        for idx, p in enumerate(encontrados, start=1):
            print(f"{idx}. Nome: {p['nome']} | Idade: {p['idade']} anos | Telefone: {p['telefone']}")


def listar_pacientes(pacientes):
    print("\\n--- LISTA COMPLETA DE PACIENTES ---")
    if not pacientes:
        print("[Aviso] Nenhum paciente cadastrado até o momento.")
        return

    for idx, p in enumerate(pacientes, start=1):
        print(f"{idx:02d}. {p['nome']:<25} | Idade: {p['idade']:>3} anos | Tel: {p['telefone']}")


def main():
    # Lista principal de dicionários (com dados fictícios iniciais para demonstração)
    pacientes = [
        {"nome": "Ana Beatriz Souza", "idade": 29, "telefone": "(41) 99123-4567"},
        {"nome": "João Pedro Lima", "idade": 64, "telefone": "(41) 98877-6655"},
        {"nome": "Lucas Martins", "idade": 18, "telefone": "(41) 99765-4321"}
    ]

    while True:
        exibir_menu()
        opcao = input("Escolha uma opção (1 a 5): ").strip()

        if opcao == "1":
            cadastrar_paciente(pacientes)
        elif opcao == "2":
            ver_estatisticas(pacientes)
        elif opcao == "3":
            buscar_paciente(pacientes)
        elif opcao == "4":
            listar_pacientes(pacientes)
        elif opcao == "5":
            print("\\nEncerrando o sistema Clínica Vida+. Até logo!")
            break
        else:
            print("\\n[Erro] Opção inválida! Digite um número entre 1 e 5.")


if __name__ == "__main__":
    main()
`;

// =========================================================================
// 2. DADOS DAS SPRINTS E QUADRO KANBAN (PASSO 1)
// =========================================================================
const SPRINTS_DATA = {
  sprint1: {
    title: "Sprint 1 — Planejamento Ágil e Núcleo Python",
    goal: "Estruturar o backlog do produto Clínica Vida+ e entregar o sistema executável clinica_vida.py com validações e estatísticas.",
    duration: "2 semanas (14 dias)",
    period: "02/11/2026 a 15/11/2026",
    report: {
      resultados: "100% das funcionalidades do cadastro Python concluídas, incluindo tratamento de exceções para idade e busca parcial por nome.",
      desafios: "Garantir que entradas vazias ou caracteres não numéricos não interrompessem o loop principal do terminal.",
      positivos: "Código modularizado em funções claras e uso eficiente de listas e dicionários.",
      melhorias: "Adicionar exportação automática dos cadastros para arquivo CSV na próxima versão."
    },
    tasks: [
      {
        id: "t1",
        title: "Definir requisitos e backlog inicial",
        desc: "Levantamento das histórias de usuário da recepção e equipe médica.",
        status: "done",
        date: "2026-11-04",
        checklist: [
          { text: "Mapear campos obrigatórios do paciente", done: true },
          { text: "Validar regras de negócio da clínica", done: true }
        ],
        comments: ["Secretária validou os campos nome, idade e telefone."]
      },
      {
        id: "t2",
        title: "Desenvolver menu e cadastro em Python",
        desc: "Implementar loop principal e dicionários em clinica_vida.py.",
        status: "done",
        date: "2026-11-08",
        checklist: [
          { text: "Criar loop while com opções 1 a 5", done: true },
          { text: "Tratar ValueError na idade", done: true }
        ],
        comments: ["Testado no terminal do VS Code com sucesso."]
      },
      {
        id: "t3",
        title: "Implementar módulo de estatísticas e busca",
        desc: "Calcular média de idade, mais novo, mais velho e busca por nome.",
        status: "progress",
        date: "2026-11-12",
        checklist: [
          { text: "Cálculo da idade média", done: true },
          { text: "Tratamento de lista vazia", done: true }
        ],
        comments: ["Revisando formatação da saída no console."]
      },
      {
        id: "t4",
        title: "Integração futura com banco SQLite",
        desc: "Persistência em banco relacional para expansão do sistema.",
        status: "backlog",
        date: "2026-11-25",
        checklist: [
          { text: "Modelar tabela pacientes", done: false }
        ],
        comments: ["Planejado para ciclo futuro."]
      }
    ]
  },
  sprint2: {
    title: "Sprint 2 — Lógica Proposicional, Fila FIFO e Modelagem UML",
    goal: "Validar tabelas-verdade de triagem, algoritmo FIFO de atendimento e diagrama de casos de uso UML.",
    duration: "2 semanas (14 dias)",
    period: "16/11/2026 a 29/11/2026",
    report: {
      resultados: "Tabelas-verdade com 16 combinações verificadas, algoritmo FIFO testado e diagrama UML com relacionamentos <<include>> finalizado.",
      desafios: "Organizar visualmente todas as associações e inclusões no diagrama UML sem cruzamentos confusos.",
      positivos: "Simuladores interativos facilitaram a conferência dos resultados lógicos e da fila.",
      melhorias: "Incluir diagrama de sequência para o fluxo de emissão de receita médica."
    },
    tasks: [
      {
        id: "t5",
        title: "Construir tabelas-verdade (Normal e Emergência)",
        desc: "Gerar as 16 combinações V/F e analisar caso A=F, B=V, C=V, D=F.",
        status: "done",
        date: "2026-11-19",
        checklist: [
          { text: "Validar 3 liberações na consulta normal", done: true },
          { text: "Validar 6 liberações na emergência", done: true }
        ],
        comments: ["Expressões conferidas algebricamente."]
      },
      {
        id: "t6",
        title: "Elaborar algoritmo FIFO em pseudocódigo",
        desc: "Inserir 3 pacientes, remover o primeiro e exibir os 2 restantes.",
        status: "sprint",
        date: "2026-11-23",
        checklist: [
          { text: "Definir registro Paciente (nome, CPF)", done: true },
          { text: "Testar ponteiros início e fim", done: false }
        ],
        comments: ["Ordem FIFO validada."]
      },
      {
        id: "t7",
        title: "Modelar Diagrama de Casos de Uso UML",
        desc: "Representar Secretária, Médico e dependências <<include>>.",
        status: "progress",
        date: "2026-11-27",
        checklist: [
          { text: "Incluir Verificar cadastro do paciente", done: true },
          { text: "Incluir Imprimir receita", done: true }
        ],
        comments: ["Diagrama SVG integrado à página."]
      }
    ]
  }
};

let currentSprintKey = "sprint1";

function renderKanban() {
  const sprint = SPRINTS_DATA[currentSprintKey];
  const statuses = ["backlog", "sprint", "progress", "done"];

  // Atualiza painel resumo da Sprint
  const totalTasks = sprint.tasks.length;
  const doneTasks = sprint.tasks.filter(t => t.status === "done").length;
  const pct = totalTasks ? Math.round((doneTasks / totalTasks) * 100) : 0;

  document.getElementById("sprintSummaryBox").innerHTML = `
    <div class="grid-2">
      <div>
        <strong>${sprint.title}</strong>
        <p class="mt-10"><strong>Objetivo:</strong> ${sprint.goal}</p>
      </div>
      <div>
        <p><strong>Duração:</strong> ${sprint.duration} | <strong>Período:</strong> ${sprint.period}</p>
        <p><strong>Progresso da Sprint:</strong> ${doneTasks} de ${totalTasks} tarefas concluídas (${pct}%)</p>
        <div class="progress-track">
          <div class="progress-fill" style="width: ${pct}%"></div>
        </div>
      </div>
    </div>
  `;

  // Limpa colunas
  statuses.forEach(st => {
    document.getElementById(`col-${st}`).innerHTML = "";
    const count = sprint.tasks.filter(t => t.status === st).length;
    document.getElementById(`count-${st}`).textContent = count;
  });

  // Renderiza cartões
  sprint.tasks.forEach(task => {
    const colEl = document.getElementById(`col-${task.status}`);
    const idx = statuses.indexOf(task.status);

    const checklistHtml = task.checklist.map((item, i) => `
      <li>
        <input type="checkbox" ${item.done ? "checked" : ""} onchange="toggleChecklist('${task.id}', ${i})" />
        <span style="${item.done ? "text-decoration: line-through; color: #64748b;" : ""}">${item.text}</span>
      </li>
    `).join("");

    const commentsHtml = task.comments.length
      ? `<div class="task-comments"><strong>Comentários:</strong> ${task.comments.join(" • ")}</div>`
      : "";

    const card = document.createElement("div");
    card.className = "task-card";
    card.innerHTML = `
      <h4>${task.title}</h4>
      <div class="task-meta">Entrega: ${task.date}</div>
      <p style="font-size: 12px;">${task.desc}</p>
      <ul class="task-checklist">${checklistHtml}</ul>
      ${commentsHtml}
      <div class="task-actions no-print">
        <div>
          ${idx > 0 ? `<button class="mini-btn" onclick="moveTask('${task.id}', -1)" title="Mover para esquerda">&larr;</button>` : ""}
          ${idx < statuses.length - 1 ? `<button class="mini-btn" onclick="moveTask('${task.id}', 1)" title="Mover para direita">&rarr;</button>` : ""}
        </div>
        <button class="mini-btn" onclick="openEditTask('${task.id}')">Editar</button>
      </div>
    `;
    colEl.appendChild(card);
  });

  // Renderiza Relatório da Sprint
  document.getElementById("sprintReportContainer").innerHTML = `
    <h3>Relatório de Encerramento — ${sprint.title}</h3>
    <div class="grid-2 mt-10">
      <div>
        <p><strong>Resultados Alcançados:</strong> ${sprint.report.resultados}</p>
        <p class="mt-10"><strong>Pontos Positivos:</strong> ${sprint.report.positivos}</p>
      </div>
      <div>
        <p><strong>Desafios Enfrentados:</strong> ${sprint.report.desafios}</p>
        <p class="mt-10"><strong>Melhorias para Próximo Ciclo:</strong> ${sprint.report.melhorias}</p>
      </div>
    </div>
  `;
}

window.moveTask = function(taskId, direction) {
  const statuses = ["backlog", "sprint", "progress", "done"];
  const sprint = SPRINTS_DATA[currentSprintKey];
  const task = sprint.tasks.find(t => t.id === taskId);
  if (!task) return;
  const newIdx = statuses.indexOf(task.status) + direction;
  if (newIdx >= 0 && newIdx < statuses.length) {
    task.status = statuses[newIdx];
    renderKanban();
  }
};

window.toggleChecklist = function(taskId, itemIdx) {
  const sprint = SPRINTS_DATA[currentSprintKey];
  const task = sprint.tasks.find(t => t.id === taskId);
  if (task && task.checklist[itemIdx]) {
    task.checklist[itemIdx].done = !task.checklist[itemIdx].done;
    renderKanban();
  }
};

window.openEditTask = function(taskId) {
  const sprint = SPRINTS_DATA[currentSprintKey];
  const task = sprint.tasks.find(t => t.id === taskId);
  if (!task) return;

  document.getElementById("modalTitle").textContent = "Editar Tarefa";
  document.getElementById("taskId").value = task.id;
  document.getElementById("taskTitle").value = task.title;
  document.getElementById("taskDesc").value = task.desc;
  document.getElementById("taskStatus").value = task.status;
  document.getElementById("taskDate").value = task.date;
  document.getElementById("taskChecklist").value = task.checklist.map(c => c.text).join(", ");
  document.getElementById("taskComment").value = "";
  document.getElementById("taskModal").classList.remove("hidden");
};

// =========================================================================
// 3. TABELAS-VERDADE E SIMULADOR LÓGICO (PASSO 3)
// =========================================================================
const logicState = { A: true, B: true, C: true, D: true };

function renderTruthTables() {
  const tbodyNormal = document.querySelector("#tableNormal tbody");
  const tbodyEmergency = document.querySelector("#tableEmergency tbody");
  tbodyNormal.innerHTML = "";
  tbodyEmergency.innerHTML = "";

  let countNormal = 0;
  let countEmergency = 0;

  for (let i = 0; i < 16; i++) {
    // Ordem padrão V para F (bit 1 = V, bit 0 = F)
    const A = Boolean((15 - i) & 8);
    const B = Boolean((15 - i) & 4);
    const C = Boolean((15 - i) & 2);
    const D = Boolean((15 - i) & 1);

    const abc = A && B && C;
    const bcd = B && C && D;
    const resNormal = abc || bcd;

    const bOrD = B || D;
    const resEmergency = C && bOrD;

    if (resNormal) countNormal++;
    if (resEmergency) countEmergency++;

    const isSelected = (A === logicState.A && B === logicState.B && C === logicState.C && D === logicState.D);
    const fmt = v => (v ? "V" : "F");

    const tr1 = document.createElement("tr");
    if (resNormal) tr1.classList.add("row-true");
    if (isSelected) tr1.classList.add("row-highlight");
    tr1.innerHTML = `
      <td>${i + 1}</td>
      <td>${fmt(A)}</td>
      <td>${fmt(B)}</td>
      <td>${fmt(C)}</td>
      <td>${fmt(D)}</td>
      <td>${fmt(abc)}</td>
      <td>${fmt(bcd)}</td>
      <td>${resNormal ? "V (Liberado)" : "F (Negado)"}</td>
    `;
    tbodyNormal.appendChild(tr1);

    const tr2 = document.createElement("tr");
    if (resEmergency) tr2.classList.add("row-true");
    if (isSelected) tr2.classList.add("row-highlight");
    tr2.innerHTML = `
      <td>${i + 1}</td>
      <td>${fmt(A)}</td>
      <td>${fmt(B)}</td>
      <td>${fmt(C)}</td>
      <td>${fmt(D)}</td>
      <td>${fmt(bOrD)}</td>
      <td>${fmt(resEmergency)}</td>
      <td>${resEmergency ? "V (Liberado)" : "F (Negado)"}</td>
    `;
    tbodyEmergency.appendChild(tr2);
  }

  document.getElementById("countNormalTrue").textContent = `${countNormal} de 16 (${((countNormal / 16) * 100).toFixed(2).replace(".", ",")}%)`;
  document.getElementById("countEmergencyTrue").textContent = `${countEmergency} de 16 (${((countEmergency / 16) * 100).toFixed(2).replace(".", ",")}%)`;
  updateLogicSimulatorOutput();
}

function updateLogicSimulatorOutput() {
  const { A, B, C, D } = logicState;
  const resNormal = (A && B && C) || (B && C && D);
  const resEmergency = C && (B || D);

  document.querySelectorAll(".logic-toggle").forEach(btn => {
    const v = btn.dataset.var;
    const val = logicState[v];
    btn.classList.toggle("active", val);
    btn.querySelector("span").textContent = val ? "V" : "F";
  });

  document.getElementById("simulatorResult").innerHTML = `
    <strong>Combinação Atual:</strong> A=${A ? "V" : "F"}, B=${B ? "V" : "F"}, C=${C ? "V" : "F"}, D=${D ? "V" : "F"} <br />
    <strong>Consulta Normal:</strong> <span style="color:${resNormal ? "#16a34a" : "#dc2626"}; font-weight:700;">${resNormal ? "V — ATENDIMENTO LIBERADO" : "F — ATENDIMENTO NEGADO"}</span> |
    <strong>Emergência:</strong> <span style="color:${resEmergency ? "#16a34a" : "#dc2626"}; font-weight:700;">${resEmergency ? "V — ATENDIMENTO LIBERADO" : "F — ATENDIMENTO NEGADO"}</span>
  `;
}

// =========================================================================
// 4. SIMULADOR DA FILA FIFO (PASSO 4)
// =========================================================================
let fifoQueue = [];

function renderFifo(statusMsg = "Clique em '1. Inserir 3 Pacientes' para iniciar a demonstração.") {
  document.getElementById("fifoStatusText").textContent = statusMsg;
  const container = document.getElementById("fifoVisualList");
  if (!fifoQueue.length) {
    container.innerHTML = `<p style="font-size:13px; color:#64748b;">[Fila vazia]</p>`;
    return;
  }
  container.innerHTML = fifoQueue.map((p, idx) => `
    <div class="fifo-item">
      <strong>${idx + 1}º na Fila</strong>
      <div>${p.nome}</div>
      <small>CPF: ${p.cpf}</small>
    </div>
  `).join("");
}

// =========================================================================
// 5. EXPORTAÇÃO E DOWNLOAD DE ARQUIVOS
// =========================================================================
function triggerDownload(filename, content, mimeType = "text/plain;charset=utf-8") {
  const blob = new Blob([content], { type: mimeType });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

function downloadPythonFile() {
  triggerDownload("clinica_vida.py", PYTHON_CODE, "text/x-python;charset=utf-8");
}

function exportSprintReport() {
  const sp = SPRINTS_DATA[currentSprintKey];
  const txt = [
    `RELATÓRIO DE SPRINT — CLÍNICA VIDA+`,
    `====================================`,
    `Sprint: ${sp.title}`,
    `Objetivo: ${sp.goal}`,
    `Duração: ${sp.duration} (${sp.period})`,
    ``,
    `RESULTADOS ALCANÇADOS:`,
    sp.report.resultados,
    ``,
    `DESAFIOS ENFRENTADOS:`,
    sp.report.desafios,
    ``,
    `PONTOS POSITIVOS:`,
    sp.report.positivos,
    ``,
    `MELHORIAS PARA PRÓXIMO CICLO:`,
    sp.report.melhorias,
    ``,
    `TAREFAS DA SPRINT:`,
    ...sp.tasks.map(t => `- [${t.status.toUpperCase()}] ${t.title} (Entrega: ${t.date})`)
  ].join("\n");

  triggerDownload(`relatorio_${currentSprintKey}_clinica_vida.txt`, txt);
}

function exportFullProjectReport() {
  const txt = [
    `PROJETO ACADÊMICO COMPLETO — CLÍNICA VIDA+`,
    `==========================================`,
    `Passo 1: Gestão Ágil com Kanban (Sprints 1 e 2 configuradas)`,
    `Passo 2: Sistema Python clinica_vida.py (Listas, Dicionários, Estatísticas e Busca)`,
    `Passo 3: Lógica Proposicional`,
    `  - Consulta Normal: (A ^ B ^ C) v (B ^ C ^ D) -> 3/16 combinações liberadas (18,75%)`,
    `  - Emergência: C ^ (B v D) -> 6/16 combinações liberadas (37,50%)`,
    `  - Caso A=F, B=V, C=V, D=F: Consulta Normal = F (Negado) | Emergência = V (Liberado)`,
    `Passo 4: Estrutura FIFO -> Inserção de 3 pacientes, remoção do 1º e exibição dos 2 restantes em ordem.`,
    `Passo 5: Diagrama UML -> Atores Secretária e Médico, 7 casos de uso e dependências <<include>>.`
  ].join("\n");

  triggerDownload("relatorio_geral_clinica_vida_plus.txt", txt);
}

// =========================================================================
// INICIALIZAÇÃO DE EVENTOS
// =========================================================================
document.addEventListener("DOMContentLoaded", () => {
  // Exibe código Python na tela
  document.getElementById("pythonCodeDisplay").textContent = PYTHON_CODE;

  // Renderiza Kanban e Tabelas-Verdade
  renderKanban();
  renderTruthTables();
  renderFifo();

  // Seletor de Sprint
  document.getElementById("sprintSelect").addEventListener("change", e => {
    currentSprintKey = e.target.value;
    renderKanban();
  });

  // Modal Nova Tarefa
  document.getElementById("btnOpenTaskModal").addEventListener("click", () => {
    document.getElementById("modalTitle").textContent = "Nova Tarefa";
    document.getElementById("taskForm").reset();
    document.getElementById("taskId").value = "";
    document.getElementById("taskDate").value = "2026-11-20";
    document.getElementById("taskModal").classList.remove("hidden");
  });

  const closeModal = () => document.getElementById("taskModal").classList.add("hidden");
  document.getElementById("btnCloseModal").addEventListener("click", closeModal);
  document.getElementById("btnCancelModal").addEventListener("click", closeModal);

  document.getElementById("taskForm").addEventListener("submit", e => {
    e.preventDefault();
    const sprint = SPRINTS_DATA[currentSprintKey];
    const id = document.getElementById("taskId").value;
    const title = document.getElementById("taskTitle").value.trim();
    const desc = document.getElementById("taskDesc").value.trim();
    const status = document.getElementById("taskStatus").value;
    const date = document.getElementById("taskDate").value;
    const checklistRaw = document.getElementById("taskChecklist").value;
    const commentRaw = document.getElementById("taskComment").value.trim();

    const checklistItems = checklistRaw
      ? checklistRaw.split(",").map(s => s.trim()).filter(Boolean).map(text => ({ text, done: false }))
      : [];

    if (id) {
      const existing = sprint.tasks.find(t => t.id === id);
      if (existing) {
        existing.title = title;
        existing.desc = desc;
        existing.status = status;
        existing.date = date;
        if (checklistItems.length) existing.checklist = checklistItems;
        if (commentRaw) existing.comments.push(commentRaw);
      }
    } else {
      sprint.tasks.push({
        id: "t" + Date.now(),
        title,
        desc,
        status,
        date,
        checklist: checklistItems,
        comments: commentRaw ? [commentRaw] : []
      });
    }

    closeModal();
    renderKanban();
  });

  // Botões de Lógica Proposicional
  document.querySelectorAll(".logic-toggle").forEach(btn => {
    btn.addEventListener("click", () => {
      const v = btn.dataset.var;
      logicState[v] = !logicState[v];
      renderTruthTables();
    });
  });

  document.getElementById("btnSetSpecificCase").addEventListener("click", () => {
    logicState.A = false;
    logicState.B = true;
    logicState.C = true;
    logicState.D = false;
    renderTruthTables();
  });

  // Botões da Fila FIFO
  document.getElementById("btnFifoEnqueue3").addEventListener("click", () => {
    fifoQueue = [
      { nome: "Mariana Costa", cpf: "111.222.333-44" },
      { nome: "Carlos Mendes", cpf: "222.333.444-55" },
      { nome: "Fernanda Alves", cpf: "333.444.555-66" }
    ];
    renderFifo("3 pacientes inseridos na fila (FIFO). Próximo a ser atendido: Mariana Costa.");
  });

  document.getElementById("btnFifoDequeue").addEventListener("click", () => {
    if (!fifoQueue.length) {
      renderFifo("A fila está vazia. Insira os pacientes primeiro.");
      return;
    }
    const atendido = fifoQueue.shift();
    renderFifo(`Atendido (removido do início): ${atendido.nome} (CPF: ${atendido.cpf}). Restam ${fifoQueue.length} na fila.`);
  });

  document.getElementById("btnFifoReset").addEventListener("click", () => {
    fifoQueue = [];
    renderFifo("Fila reiniciada.");
  });

  // Botões de Download, Cópia e Impressão
  document.getElementById("btnDownloadPy").addEventListener("click", downloadPythonFile);
  document.getElementById("btnDownloadPyTop").addEventListener("click", downloadPythonFile);
  document.getElementById("btnExportSprintReport").addEventListener("click", exportSprintReport);
  document.getElementById("btnExportFullReport").addEventListener("click", exportFullProjectReport);
  document.getElementById("btnPrint").addEventListener("click", () => window.print());

  document.getElementById("btnCopyPy").addEventListener("click", () => {
    navigator.clipboard.writeText(PYTHON_CODE).then(() => {
      const btn = document.getElementById("btnCopyPy");
      btn.textContent = "Copiado!";
      setTimeout(() => (btn.textContent = "Copiar Código"), 2000);
    });
  });
});