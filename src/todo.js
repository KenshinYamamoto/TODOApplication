const onClickAdd = () => {
    // テキストボックスの値を取得し、値を初期化する
    const inputText = document.getElementById('add-text').value;
    document.getElementById('add-text').value = '';

    createIncompleteList(inputText);
};

// 未完了リストから指定の要素を削除する関数
const deleteFromIncompleteList = target => {
    document.getElementById('incomplete-list').removeChild(target);
}

// 未完了リストに追加する関数
const createIncompleteList = (text) => {
    // liを生成
    const li = document.createElement('li');

     // divを生成
    const div = document.createElement('div');
    div.className = 'list-row';
    
    // pを生成
     const p = document.createElement('p');
     p.className = 'text';
     p.innerText = text;
    
    // completeButtonを生成
     const completeButton = document.createElement('button');
     completeButton.className = 'text';
     completeButton.innerText = '完了';
     completeButton.addEventListener('click', () => {
        // 押された完了ボタンの親タグ(li)を未完了リストから削除する
        deleteFromIncompleteList(completeButton.parentNode.parentNode);
    
        // 完了リストに追加する
        const addTarget = completeButton.parentNode.parentNode; // 完了リストに追加する要素
        const text = completeButton.parentNode.firstElementChild.innerText; // TODO内容テキストを取得
    
        // li以下を初期化
        addTarget.textContent = null;
    
        // divタグを生成
        const div = document.createElement('div');
        div.className = 'list-row';
    
        // pタグを生成
        const p = document.createElement('p');
        p.innerText = text;
        p.className = 'text';
    
        // backButtonを生成
        const backButton = document.createElement('button');
        backButton.innerText = '戻す';
        backButton.className = 'text';
        backButton.addEventListener('click', () => {
            // 押された戻すの親タグを完了リストから削除
            const deleteTarget = backButton.parentNode.parentNode; // li
            document.getElementById('complete-list').removeChild(deleteTarget);
    
            // textを取得
            const text = backButton.parentNode.firstElementChild.innerText;
            createIncompleteList(text);
        });
    
        // 各要素を追加していく
        div.appendChild(p);
        div.appendChild(backButton);
        addTarget.appendChild(div);
    
        // 完了リストに追加する
        document.getElementById('complete-list').appendChild(addTarget);
    });
    
    // deleteButtonを生成
    const deleteButton = document.createElement('button');
    deleteButton.className = 'text';
    deleteButton.innerText = '削除';
    deleteButton.addEventListener('click', () => {
        // 押された削除ボタンの親タグ(li)を未完了リストから削除する
        deleteFromIncompleteList(deleteButton.parentNode.parentNode);
    });
    
    // liタグの子要素に各要素を設定
    div.appendChild(p);
    div.appendChild(completeButton);
    div.appendChild(deleteButton);
    li.appendChild(div);
    
    // 未完了リストに追加
    document.getElementById('incomplete-list').appendChild(li);
}

document.getElementById('add-button').addEventListener('click', () => onClickAdd());