async function loadRules() {
    try {
        const response = await fetch('rules.json');
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        renderRules(data);
        document.getElementById('loading').style.display = 'none';
        document.getElementById('content').style.display = 'block';
    } catch (error) {
        console.error('Error loading rules:', error);
        document.getElementById('loading').style.display = 'none';
        document.getElementById('error').style.display = 'block';
        document.getElementById('error').textContent = 'Error al cargar las reglas. Por favor, recarga la página.';
    }
}

function renderRules(data) {
    const titleElement = document.getElementById('title');
    titleElement.innerHTML = data.title;
    if (data.note) {
        titleElement.innerHtml += `<note>${data.note}</note>`;
    }
    const rulesList = document.getElementById('rules-list');
    
    data.rules.forEach(rule => {
        const li = document.createElement('li');
      
        const titleSpan = document.createElement('span');
        titleSpan.className = 'rule-title';
        titleSpan.textContent = rule.title;
        
        const toggleBtn = document.createElement('button');
        toggleBtn.className = 'toggle-btn';
        toggleBtn.textContent = '+';
        toggleBtn.title = 'Mostrar/Ocultar regla';

        const titleDiv = document.createElement('div');
        titleDiv.className = 'title-div';
        titleDiv.onclick = () => toggleRule(toggleBtn);
        titleDiv.appendChild(titleSpan);
        titleDiv.appendChild(toggleBtn);

        const contentDiv = document.createElement('div');
        contentDiv.className = 'rule-content';
        contentDiv.innerHTML = renderRuleContent(rule.content);
        
        li.appendChild(titleDiv);
        li.appendChild(contentDiv);
        rulesList.appendChild(li);
    });
}

function renderRuleContent(content) {
    let html = '';
    
    if (content.subtitle) {
        html += `<h3>${content.subtitle}</h3>`;
    }
    
    if (content.sections) {
        content.sections.forEach(section => {
            html += `<p><strong>${section.title}</strong>`;
            if (section.note) {
                html += ` <note>${section.note}</note>`;
            }
            html += `: ${section.description}</p>`;
        });
    }
    
    if (content.paragraphs) {
        content.paragraphs.forEach(paragraph => {
            html += `<p>${paragraph}</p>`;
        });
    }
    
    if (content.list) {
        html += '<ul class="content-list">';
        content.list.forEach(item => {
            html += `<li><strong>${item.title}</strong>`;
            if (item.note) {
                html += ` <note>${item.note}</note>`;
            }
            html += `: ${item.description}</li>`;
        });
        html += '</ul>';
    }
    
    if (content.footer) {
        html += `<p>${content.footer}</p>`;
    }
    
    return html;
}

function toggleRule(button) {
    const content = button.parentElement.nextElementSibling;
    const isVisible = content.classList.contains('show');
    
    if (isVisible) {
        content.classList.remove('show');
        button.textContent = '+';
        button.title = 'Mostrar regla';
    } else {
        content.classList.add('show');
        button.textContent = '−';
        button.title = 'Ocultar regla';
    }
}

// Load rules when page loads
document.addEventListener('DOMContentLoaded', loadRules);
