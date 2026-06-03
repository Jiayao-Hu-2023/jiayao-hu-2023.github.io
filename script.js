// ====== 多语言配置 ======
const translations = {
    'zh-cn': {
        title: '答案之书',
        subtitle: 'Book of Answers',
        welcome_title: '答案之书',
        welcome_desc: '心中默念你的问题，然后在此写下。宇宙会为你翻到那一页，给出属于你的答案。',
        hint_1: '我应该换一份工作吗',
        hint_2: '他/她在想我吗',
        hint_3: '现在开始来得及吗',
        hint_4: '该不该主动一点',
        placeholder: '写下你心中的问题...',
        footer_hint: '翻阅答案之书，聆听内心的回响',
        divider_text: '答案之书',
        hint_questions: [
            '我应该换一份工作吗？',
            '他/她在想我吗？',
            '现在开始来得及吗？',
            '该不该主动一点？'
        ],
        answers: [
            '是的，毫无疑问。',
            '不，绝不可能。',
            '也许吧，一切皆有可能。',
            '再想想，答案尚未清晰。',
            '时机未到，请耐心等待。',
            '勇敢去做，不要犹豫。',
            '顺其自然，无需强求。',
            '这是命运的安排。',
            '别犹豫了，就是现在。',
            '答案就在你心中。',
            '放弃这个念头吧。',
            '一切都会好起来的。',
            '现在不是时候。',
            '相信自己的直觉。',
            '等待更好的时机出现。',
            '大胆前行，前路光明。',
            '这件事需要更多耐心。',
            '你会找到出路的。',
            '不要回头看。',
            '机会稍纵即逝，把握当下。',
            '坚持下去，胜利在望。',
            '换个角度思考，你会看到不同的风景。',
            '这完全取决于你自己。',
            '别想太多，放手去做。',
            '放手一搏，成败在此一举。',
            '值得等待，好的事物总是姗姗来迟。',
            '结果会出乎你的意料。',
            '听从内心的声音，它知道答案。',
            '风险与回报并存，你准备好了吗？',
            '时机正好，不要错过。',
            '这条路走不通，试试另一条。',
            '你需要更多时间来思考。',
            '这是一个好主意。',
            '暂时不要行动。',
            '命运之轮正在转动，静候佳音。',
            '你已经知道答案了，只是不敢面对。',
            '前方有惊喜在等着你。',
            '小心行事，注意细节。',
            '一切如你所愿。',
            '重新审视你的动机。',
            '千里之行，始于足下。',
            '有些事情急不得。',
            '今天不是做决定的好日子。',
            '明天再说吧。',
            '大胆说出你的想法。',
            '沉默是金。',
            '有人正在等着你的回应。',
            '这件事比你想象的更简单。',
            '别低估了自己的能力。',
            '好事多磨。',
            '现在就行动，不要拖延。',
            '退一步海阔天空。',
            '你比自己想象的更强大。',
            '这个选择是正确的。',
            '小心，事情并不像表面那样。',
            '接受改变，拥抱未知。',
            '有时候，失去也是一种获得。',
            '慢慢来，不着急。',
            '最困难的部分已经过去了。',
            '别让恐惧阻止你。',
            '你值得更好的。',
            '学会放手，才能得到。',
            '这是一个考验，你会通过的。',
            '保持冷静，一切尽在掌握。',
            '先处理好眼前的事。',
            '跳出舒适圈，你会看到新世界。',
            '这个问题的答案不重要，重要的是你的感受。',
            '跟着感觉走。',
            '不要让别人的意见左右你。',
            '你正在走在正确的路上。',
            '停下来，好好休息一下。',
            '改变策略，换个方式。',
            '这是你应得的。',
            '别给自己太大压力。',
            '珍惜当下，活在此时此刻。',
            '不破不立。',
            '你的善良终将被看见。',
            '是时候做出决定了。',
            '让时间来证明一切。',
            '你需要的勇气，其实一直都在。',
            '这不是终点，而是新的起点。',
            '有些路注定要一个人走。',
            '别急着下结论。',
            '你是独一无二的，不需要比较。',
            '你想要的那一天，终会到来。',
            '专注于当下，一步一个脚印。',
            '勇敢说再见，才能迎来新的相遇。',
            '这世界上没有错误的决定。',
            '做最坏的打算，抱最好的期望。',
            '你会感谢现在努力的自己。',
            '该来的总会来。',
            '不必追求完美，足够好就够了。',
            '最好的答案往往最简单。',
            '命运给你关上一扇门，必会打开一扇窗。',
            '只有你自己能定义自己。',
            '勇敢面对，逃避解决不了问题。',
            '享受过程，结果自然而来。',
            '你的直觉不会欺骗你。',
            '有时候，不做什么才是最好的选择。',
            '不要为了取悦他人而委屈自己。',
            '缘分到了，一切水到渠成。',
            '你已经做得很好了。',
            '越努力，越幸运。',
            '这个挑战会让你成长。',
            '学会说不，是一种智慧。',
            '没关系，一切都可以重来。',
            '真正的力量来自内心。',
            '现在，深呼吸，然后行动。',
            '世界上没有白走的路。',
            '你缺少的不是能力，是信心。',
            '有些等待是值得的。',
            '给自己一个机会。',
            '你比自己以为的更接近目标。',
            '做真实的自己，其余的随缘。',
            '放下执念，海阔天空。',
            '先爱自己，再爱别人。',
            '这一刻，你需要的不是答案，而是勇气。',
            '时间会给你最好的答案。',
            '去吧，没有遗憾就好。',
            '此刻的迷茫，是成长的必经之路。',
            '有些事不试永远不知道结果。',
            '与其犹豫，不如行动。',
            '人生没有白走的路，每一步都算数。',
            '保持希望，天亮之前最黑暗。',
            '你的坚持终将美好。'
        ]
    },
    'zh-tw': {
        title: '答案之書',
        subtitle: 'Book of Answers',
        welcome_title: '答案之書',
        welcome_desc: '心中默念你的問題，然後在此寫下。宇宙會為你翻到那一頁，給出屬於你的答案。',
        hint_1: '我應該換一份工作嗎',
        hint_2: '他/她在想我嗎',
        hint_3: '現在開始來得及嗎',
        hint_4: '該不該主動一點',
        placeholder: '寫下你心中的問題...',
        footer_hint: '翻閱答案之書，聆聽內心的回響',
        divider_text: '答案之書',
        hint_questions: [
            '我應該換一份工作嗎？',
            '他/她在想我嗎？',
            '現在開始來得及嗎？',
            '該不該主動一點？'
        ],
        answers: [
            '是的，毫無疑問。',
            '不，絕不可能。',
            '也許吧，一切皆有可能。',
            '再想想，答案尚未清晰。',
            '時機未到，請耐心等待。',
            '勇敢去做，不要猶豫。',
            '順其自然，無需強求。',
            '這是命運的安排。',
            '別猶豫了，就是現在。',
            '答案就在你心中。',
            '放棄這個念頭吧。',
            '一切都會好起來的。',
            '現在不是時候。',
            '相信自己的直覺。',
            '等待更好的時機出現。',
            '大膽前行，前路光明。',
            '這件事需要更多耐心。',
            '你會找到出路的。',
            '不要回頭看。',
            '機會稍縱即逝，把握當下。',
            '堅持下去，勝利在望。',
            '換個角度思考，你會看到不同的風景。',
            '這完全取決於你自己。',
            '別想太多，放手去做。',
            '放手一搏，成敗在此一舉。',
            '值得等待，好的事物總是姍姍來遲。',
            '結果會出乎你的意料。',
            '聽從內心的聲音，它知道答案。',
            '風險與回報並存，你準備好了嗎？',
            '時機正好，不要錯過。',
            '這條路走不通，試試另一條。',
            '你需要更多時間來思考。',
            '這是一個好主意。',
            '暫時不要行動。',
            '命運之輪正在轉動，靜候佳音。',
            '你已經知道答案了，只是不敢面對。',
            '前方有驚喜在等著你。',
            '小心行事，注意細節。',
            '一切如你所願。',
            '重新審視你的動機。',
            '千里之行，始於足下。',
            '有些事情急不得。',
            '今天不是做決定的好日子。',
            '明天再說吧。',
            '大膽說出你的想法。',
            '沉默是金。',
            '有人正在等著你的回應。',
            '這件事比你想像的更簡單。',
            '別低估了自己的能力。',
            '好事多磨。',
            '現在就行動，不要拖延。',
            '退一步海闊天空。',
            '你比自己想像的更強大。',
            '這個選擇是正確的。',
            '小心，事情並不像表面那樣。',
            '接受改變，擁抱未知。',
            '有時候，失去也是一種獲得。',
            '慢慢來，不著急。',
            '最困難的部分已經過去了。',
            '別讓恐懼阻止你。',
            '你值得更好的。',
            '學會放手，才能得到。',
            '這是一個考驗，你會通過的。',
            '保持冷靜，一切盡在掌握。',
            '先處理好眼前的事。',
            '跳出舒適圈，你會看到新世界。',
            '這個問題的答案不重要，重要的是你的感受。',
            '跟著感覺走。',
            '不要讓別人的意見左右你。',
            '你正在走在正確的路上。',
            '停下來，好好休息一下。',
            '改變策略，換個方式。',
            '這是你應得的。',
            '別給自己太大壓力。',
            '珍惜當下，活在此時此刻。',
            '不破不立。',
            '你的善良終將被看見。',
            '是時候做出決定了。',
            '讓時間來證明一切。',
            '你需要的勇氣，其實一直都在。',
            '這不是終點，而是新的起點。',
            '有些路註定要一個人走。',
            '別急著下結論。',
            '你是獨一無二的，不需要比較。',
            '你想要的那一天，終會到來。',
            '專注於當下，一步一個腳印。',
            '勇敢說再見，才能迎來新的相遇。',
            '這世界上沒有錯誤的決定。',
            '做最壞的打算，抱最好的期望。',
            '你會感謝現在努力的自己。',
            '該來的總會來。',
            '不必追求完美，足夠好就夠了。',
            '最好的答案往往最簡單。',
            '命運給你關上一扇門，必會打開一扇窗。',
            '只有你自己能定義自己。',
            '勇敢面對，逃避解決不了問題。',
            '享受過程，結果自然而來。',
            '你的直覺不會欺騙你。',
            '有時候，不做什麼才是最好的選擇。',
            '不要為了取悅他人而委屈自己。',
            '緣分到了，一切水到渠成。',
            '你已經做得很好了。',
            '越努力，越幸運。',
            '這個挑戰會讓你成長。',
            '學會說不，是一種智慧。',
            '沒關係，一切都可以重來。',
            '真正的力量來自內心。',
            '現在，深呼吸，然後行動。',
            '世界上沒有白走的路。',
            '你缺少的不是能力，是信心。',
            '有些等待是值得的。',
            '給自己一個機會。',
            '你比自己以為的更接近目標。',
            '做真實的自己，其餘的隨緣。',
            '放下執念，海闊天空。',
            '先愛自己，再愛別人。',
            '這一刻，你需要的不是答案，而是勇氣。',
            '時間會給你最好的答案。',
            '去吧，沒有遺憾就好。',
            '此刻的迷茫，是成長的必經之路。',
            '有些事不試永遠不知道結果。',
            '與其猶豫，不如行動。',
            '人生沒有白走的路，每一步都算數。',
            '保持希望，天亮之前最黑暗。',
            '你的堅持終將美好。'
        ]
    },
    'en-us': {
        title: 'The Book of Answers',
        subtitle: 'Book of Answers',
        welcome_title: 'The Book of Answers',
        welcome_desc: 'Whisper your question in your heart, then write it down here. The universe will turn the page and give you your answer.',
        hint_1: 'Should I change jobs',
        hint_2: 'Is he/she thinking of me',
        hint_3: 'Is it too late to start',
        hint_4: 'Should I be more proactive',
        placeholder: 'Write your question...',
        footer_hint: 'Open the Book of Answers, listen to the echo within',
        divider_text: 'The Book of Answers',
        hint_questions: [
            'Should I change jobs?',
            'Is he/she thinking of me?',
            'Is it too late to start?',
            'Should I be more proactive?'
        ],
        answers: [
            'Yes, without a doubt.',
            'No, absolutely not.',
            'Perhaps, anything is possible.',
            'Think again, the answer is not yet clear.',
            'The time is not right, please wait patiently.',
            'Be brave and do it, do not hesitate.',
            'Let it be, no need to force.',
            'This is fate.',
            "Don't hesitate, now is the time.",
            'The answer is within you.',
            "Give up this thought.",
            'Everything will be alright.',
            'Now is not the time.',
            'Trust your intuition.',
            'Wait for a better time to come.',
            'Move forward boldly, the future is bright.',
            'This requires more patience.',
            'You will find a way out.',
            'Do not look back.',
            'Opportunities are fleeting, seize the moment.',
            'Keep going, victory is near.',
            'Think differently, you will see a different view.',
            'It all depends on you.',
            "Don't overthink, just do it.",
            'Take a leap of faith, success or failure depends on this.',
            'Good things come to those who wait.',
            'The result will surprise you.',
            'Listen to your heart, it knows the answer.',
            'Risk and reward coexist, are you ready?',
            'The timing is perfect, do not miss it.',
            'This path is blocked, try another.',
            'You need more time to think.',
            'This is a good idea.',
            'Do not act for now.',
            'The wheel of fate is turning, wait for good news.',
            'You already know the answer, just afraid to face it.',
            'There are surprises ahead.',
            'Be careful, pay attention to details.',
            'Everything as you wish.',
            'Re-examine your motives.',
            'A journey of a thousand miles begins with a single step.',
            'Some things cannot be rushed.',
            'Today is not a good day to decide.',
            'Leave it for tomorrow.',
            'Speak your mind boldly.',
            'Silence is golden.',
            'Someone is waiting for your response.',
            'This is simpler than you think.',
            "Don't underestimate your abilities.",
            'Good things take time.',
            'Act now, do not procrastinate.',
            'Take a step back, see the bigger picture.',
            'You are stronger than you think.',
            'This is the right choice.',
            'Be careful, things are not as they seem.',
            'Embrace change, embrace the unknown.',
            'Sometimes, losing is also gaining.',
            'Take your time, no rush.',
            'The hardest part is over.',
            "Don't let fear stop you.",
            'You deserve better.',
            'Learn to let go, to receive.',
            'This is a test, you will pass.',
            'Stay calm, everything is under control.',
            'Handle the matter at hand first.',
            'Step out of your comfort zone, see a new world.',
            'The answer is not important, your feelings are.',
            'Follow your heart.',
            "Don't let others' opinions sway you.",
            'You are on the right path.',
            'Stop and rest.',
            'Change strategy, try a different approach.',
            'You deserve this.',
            "Don't pressure yourself too much.",
            'Cherish the present, live in the moment.',
            'Destruction precedes construction.',
            'Your kindness will be seen.',
            'It is time to decide.',
            'Let time prove everything.',
            'The courage you need has always been there.',
            'This is not the end, but a new beginning.',
            'Some paths are meant to be walked alone.',
            "Don't rush to conclusions.",
            'You are unique, no need to compare.',
            'The day you desire will come.',
            'Focus on the present, step by step.',
            'Brave goodbye, welcome new encounters.',
            'There are no wrong decisions.',
            'Prepare for the worst, hope for the best.',
            'You will thank yourself for working hard.',
            'What is meant to be will be.',
            'No need for perfection, good enough is enough.',
            'The best answers are often the simplest.',
            'When one door closes, another opens.',
            'Only you can define yourself.',
            'Face it bravely, running away solves nothing.',
            'Enjoy the process, the result will come.',
            'Your intuition will not deceive you.',
            'Sometimes, doing nothing is the best choice.',
            "Don't please others at your own expense.",
            'When fate arrives, everything falls into place.',
            'You have done well.',
            'The harder you work, the luckier you get.',
            'This challenge will make you grow.',
            'Learning to say no is wisdom.',
            'It is okay, everything can start over.',
            'True strength comes from within.',
            'Now, take a deep breath and act.',
            'No path is ever wasted.',
            'What you lack is not ability, but confidence.',
            'Some waits are worth it.',
            'Give yourself a chance.',
            'You are closer than you think.',
            'Be true to yourself, the rest follows.',
            'Let go of attachments, the world is wide.',
            'Love yourself first, then others.',
            'At this moment, what you need is not an answer, but courage.',
            'Time will give you the best answer.',
            'Go, without regret.',
            'This confusion is part of growth.',
            'Some things you never know until you try.',
            'Instead of hesitating, take action.',
            'Every step counts.',
            'Keep hope, the darkest hour is before dawn.',
            'Your persistence will bear fruit.'
        ]
    }
};

// 当前语言
let currentLang = 'zh-cn';

// ====== 状态管理 ======
let isTyping = false;
let currentTypingEl = null;
let chatHistory = [];

// ====== DOM 元素 ======
const chatMain = document.getElementById('chat-main');
const chatContainer = document.getElementById('chat-container');
const welcomeEl = document.getElementById('welcome');
const userInput = document.getElementById('user-input');
const sendBtn = document.getElementById('send-btn');
const toastEl = document.getElementById('toast');
const langSelect = document.getElementById('lang-select');
const htmlEl = document.getElementById('html-lang');

// ====== 获取当前语言的翻译 ======
function t(key) {
    const langTranslations = translations[currentLang];
    return langTranslations && langTranslations[key] ? langTranslations[key] : key;
}

// ====== 获取当前语言的答案 ======
function getCurrentAnswers() {
    return translations[currentLang].answers;
}

// ====== 获取当前语言的提示问题 ======
function getCurrentHintQuestions() {
    return translations[currentLang].hint_questions;
}

// ====== 获取系统语言 ======
function getSystemLang() {
    let lang = navigator.language || navigator.userLanguage;
    lang = lang.toLowerCase();
    
    if (lang.startsWith('zh-cn') || lang.startsWith('zh-cn') || lang === 'zh') {
        return 'zh-cn';
    } else if (lang.startsWith('zh-tw') || lang.startsWith('zh-hk') || lang.startsWith('zh-hant')) {
        return 'zh-tw';
    } else if (lang.startsWith('en')) {
        return 'en-us';
    } else {
        // 默认语言是英文
        return 'en-us';
    }
}

// ====== 设置语言 ======
function setLang(lang) {
    if (!translations[lang]) return;
    
    currentLang = lang;
    
    // 更新HTML lang属性
    htmlEl.lang = lang === 'zh-cn' ? 'zh-CN' : lang === 'zh-tw' ? 'zh-TW' : 'en-US';
    
    // 更新body的语言类
    document.body.className = document.body.className.replace(/lang-\w+/g, '') + ' lang-' + lang;
    
    // 更新选择器
    langSelect.value = lang;
    
    // 更新页面标题
    document.title = t('title');
    
    // 更新所有带data-i18n属性的元素
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        const translation = t(key);
        
        if (el.tagName === 'TEXTAREA' || el.tagName === 'INPUT') {
            el.placeholder = translation;
        } else {
            el.textContent = translation;
        }
    });
    
    // 更新提示问题按钮的onclick事件和文本
    const hintButtons = document.querySelectorAll('.hint-tag');
    const hintQuestions = getCurrentHintQuestions();
    hintButtons.forEach((btn, index) => {
        if (hintQuestions[index]) {
            btn.textContent = t('hint_' + (index + 1));
            btn.onclick = () => fillQuestion(hintQuestions[index]);
        }
    });
    
    // 更新页面标题
    document.querySelector('title').textContent = t('title');
    
    // 如果欢迎区域可见，需要重新设置
    if (welcomeEl && welcomeEl.style.display !== 'none') {
        welcomeEl.style.display = 'none';
        welcomeEl.style.display = 'flex';
    }
}

// ====== 工具函数 ======

// 获取当前时间字符串
function getTimeStr() {
    const now = new Date();
    return now.getHours().toString().padStart(2, '0') + ':' + now.getMinutes().toString().padStart(2, '0');
}

// 随机选择答案
function getRandomAnswer() {
    const answers = getCurrentAnswers();
    return answers[Math.floor(Math.random() * answers.length)];
}

// 显示 Toast 提示
function showToast(msg) {
    toastEl.textContent = msg;
    toastEl.classList.add('show');
    setTimeout(() => toastEl.classList.remove('show'), 2000);
}

// 滚动到底部
function scrollToBottom() {
    chatMain.scrollTop = chatMain.scrollHeight;
}

// 填充推荐问题
function fillQuestion(text) {
    userInput.value = text;
    userInput.focus();
    autoResizeTextarea();
}

// 自适应输入框高度
function autoResizeTextarea() {
    userInput.style.height = 'auto';
    userInput.style.height = Math.min(userInput.scrollHeight, 120) + 'px';
}

// ====== 消息创建 ======

// 创建用户消息
function addUserMessage(text) {
    if (welcomeEl) {
        welcomeEl.style.display = 'none';
    }

    const msgDiv = document.createElement('div');
    msgDiv.className = 'message user';
    msgDiv.innerHTML = `
        <div class="msg-avatar"><i class="fas fa-user"></i></div>
        <div class="msg-content">
            <div class="msg-bubble">${escapeHtml(text)}</div>
            <div class="msg-time">${getTimeStr()}</div>
        </div>
    `;
    chatContainer.appendChild(msgDiv);
    scrollToBottom();
}

// 创建AI消息（带打字机效果）
function addAIMessage(text) {
    const divider = document.createElement('div');
    divider.className = 'divider-line';
    divider.textContent = t('divider_text');
    chatContainer.appendChild(divider);

    const msgDiv = document.createElement('div');
    msgDiv.className = 'message ai';
    const bubbleId = 'ai-bubble-' + Date.now();
    msgDiv.innerHTML = `
        <div class="msg-avatar"><i class="fas fa-book-open"></i></div>
        <div class="msg-content">
            <div class="msg-bubble" id="${bubbleId}">
                <div class="thinking-dots"><span></span><span></span><span></span></div>
            </div>
            <div class="msg-time">${getTimeStr()}</div>
        </div>
    `;
    chatContainer.appendChild(msgDiv);
    scrollToBottom();

    const bubble = document.getElementById(bubbleId);

    const delay = 800 + Math.random() * 700;
    setTimeout(() => {
        typeWriter(bubble, text, 0);
    }, delay);
}

// 打字机效果
function typeWriter(el, text, index) {
    if (index === 0) {
        el.innerHTML = '';
        isTyping = true;
        currentTypingEl = el;
        updateSendBtn();
    }

    if (index < text.length) {
        const char = text[index];
        const oldCursor = el.querySelector('.typing-cursor');
        if (oldCursor) oldCursor.remove();

        const span = document.createElement('span');
        span.textContent = char;
        span.style.opacity = '0';
        span.style.transition = 'opacity 0.15s ease';
        el.appendChild(span);

        const cursor = document.createElement('span');
        cursor.className = 'typing-cursor';
        el.appendChild(cursor);

        requestAnimationFrame(() => {
            span.style.opacity = '1';
        });

        scrollToBottom();

        let nextDelay = 40 + Math.random() * 30;
        if ('，。！？、；：.,!?;:'.includes(char)) {
            nextDelay = 200 + Math.random() * 150;
        } else if ('—…--'.includes(char)) {
            nextDelay = 100 + Math.random() * 80;
        }

        setTimeout(() => typeWriter(el, text, index + 1), nextDelay);
    } else {
        setTimeout(() => {
            const cursor = el.querySelector('.typing-cursor');
            if (cursor) cursor.remove();
            isTyping = false;
            currentTypingEl = null;
            updateSendBtn();
        }, 600);
    }
}

// 更新发送按钮状态
function updateSendBtn() {
    sendBtn.disabled = isTyping || !userInput.value.trim();
}

// HTML转义
function escapeHtml(str) {
    const div = document.createElement('div');
    div.textContent = str;
    return div.innerHTML;
}

// ====== 发送消息 ======
function sendMessage() {
    const text = userInput.value.trim();
    if (!text || isTyping) return;

    addUserMessage(text);
    userInput.value = '';
    userInput.style.height = 'auto';
    updateSendBtn();

    const answer = getRandomAnswer();
    addAIMessage(answer);
}

// ====== 事件绑定 ======
sendBtn.addEventListener('click', sendMessage);

userInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault();
        sendMessage();
    }
});

userInput.addEventListener('input', () => {
    autoResizeTextarea();
    updateSendBtn();
});

// 语言选择事件
langSelect.addEventListener('change', (e) => {
    setLang(e.target.value);
});

// ====== 页面加载时初始化语言 ======
document.addEventListener('DOMContentLoaded', () => {
    const systemLang = getSystemLang();
    setLang(systemLang);
});

// ====== 背景粒子效果 ======
(function initParticles() {
    const canvas = document.getElementById('bg-canvas');
    const ctx = canvas.getContext('2d');
    let particles = [];
    let animId;

    function resize() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }

    resize();
    window.addEventListener('resize', resize);

    const PARTICLE_COUNT = 60;
    for (let i = 0; i < PARTICLE_COUNT; i++) {
        particles.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            vx: (Math.random() - 0.5) * 0.15,
            vy: (Math.random() - 0.5) * 0.15,
            radius: Math.random() * 1.5 + 0.5,
            alpha: Math.random() * 0.4 + 0.05,
            alphaDir: (Math.random() - 0.5) * 0.003,
            hue: 38 + Math.random() * 20
        });
    }

    function draw() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        const grd = ctx.createRadialGradient(
            canvas.width / 2, canvas.height, 0,
            canvas.width / 2, canvas.height, canvas.height * 0.6
        );
        grd.addColorStop(0, 'rgba(200,164,90,0.03)');
        grd.addColorStop(1, 'rgba(0,0,0,0)');
        ctx.fillStyle = grd;
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        particles.forEach(p => {
            p.x += p.vx;
            p.y += p.vy;
            p.alpha += p.alphaDir;

            if (p.alpha <= 0.03 || p.alpha >= 0.45) p.alphaDir *= -1;
            p.alpha = Math.max(0.03, Math.min(0.45, p.alpha));

            if (p.x < -10) p.x = canvas.width + 10;
            if (p.x > canvas.width + 10) p.x = -10;
            if (p.y < -10) p.y = canvas.height + 10;
            if (p.y > canvas.height + 10) p.y = -10;

            ctx.beginPath();
            ctx.arc(p.x, p.y, Math.max(0.1, p.radius), 0, Math.PI * 2);
            ctx.fillStyle = `hsla(${p.hue}, 60%, 55%, ${p.alpha})`;
            ctx.fill();

            if (p.radius > 1) {
                ctx.beginPath();
                ctx.arc(p.x, p.y, Math.max(0.1, p.radius * 3), 0, Math.PI * 2);
                ctx.fillStyle = `hsla(${p.hue}, 60%, 55%, ${p.alpha * 0.15})`;
                ctx.fill();
            }
        });

        animId = requestAnimationFrame(draw);
    }

    draw();

    document.addEventListener('visibilitychange', () => {
        if (document.hidden) {
            cancelAnimationFrame(animId);
        } else {
            draw();
        }
    });
})();