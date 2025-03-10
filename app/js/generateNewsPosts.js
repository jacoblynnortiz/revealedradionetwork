const postsContainer = document.getElementById('postsContainer');

$.getJSON('https://api.npoint.io/3b19db1cde3d21143487', function (rrnNewsPosts) {
    for (let i = 0; i <= 10; i++) {
        let newPostContainer = document.createElement('div');

        newPostContainer.classList.add('post-container');

        createDesktopPost(newPostContainer, rrnNewsPosts, i);
        createMobilePost(newPostContainer, rrnNewsPosts, i);
    }
});

function createDesktopPost(newPostContainer, rrnNewsPosts, i) {

    // creates all the needed elements for post

    let postDesktopContainer = document.createElement('div');

    let postTitle = document.createElement('h3');
    let postDiscription = document.createElement('p');
    let postCover = document.createElement('div');

    let postCoverOverlayContainer = document.createElement('div');

    let postSmallTitle = document.createElement('h4');
    let postSrc = document.createElement('a');
    let postSrcIcon = document.createElement('i');
    let postSmallDiscription = document.createElement('p');
    let postMetaInfoContainer = document.createElement('div');

    let postWrittenByContainer = document.createElement('div');
    let postWrittenByHeader = document.createElement('h5');
    let postWrapRow1 = document.createElement('div');
    let postAuthorImg = document.createElement('img');
    let postAuthor = document.createElement('span');

    let postPublishedOnContainer = document.createElement('div');
    let postPublishedOnHeader = document.createElement('h5');
    let postWrapRow2 = document.createElement('div');
    let postPublished = document.createElement('span');

    let postCategoriesContainer = document.createElement('div');
    let postCategoriesHeader = document.createElement('h5');
    let postCategoriesList = document.createElement('ul');

    // add info and classes to each container

    postDesktopContainer.classList.add('post-desktop');

    postTitle.innerText = rrnNewsPosts[i].mainTitle;
    postDiscription.innerText = rrnNewsPosts[i].mainDiscription;
    postCover.classList.add('post-cover');
    postCover.style.backgroundImage = 'url(' + rrnNewsPosts[i].postCover + ')';

    postCoverOverlayContainer.classList.add('post-cover-overlay');

    postSmallTitle.innerText = rrnNewsPosts[i].shortTitle;
    postSrc.href = rrnNewsPosts[i].newsletterSrc;
    postSrc.setAttribute('target', "_blank");
    postSrcIcon.classList.add('fa-solid');
    postSrcIcon.classList.add('fa-arrow-up');
    postSmallDiscription.innerText = rrnNewsPosts[i].shortDiscription;
    postMetaInfoContainer.classList.add('overlay-meta-info');

    postWrittenByContainer.classList.add('written-by');
    postWrittenByContainer.style.width = '20%';
    postPublishedOnContainer.classList.add('published-on');
    postPublishedOnContainer.style.width = '55%';
    postCategoriesContainer.classList.add('categories');
    postCategoriesContainer.style.width = '30%';

    postWrittenByHeader.innerText = 'Written by';
    postWrapRow1.classList.add('wrap-row');
    postAuthorImg.src = rrnNewsPosts[i].authorPhoto;
    postAuthor.innerText = rrnNewsPosts[i].writtenBy;

    postPublishedOnHeader.innerText = 'Published on';
    postWrapRow2.classList.add('wrap-row');
    postPublished.innerText = rrnNewsPosts[i].publishedOn;

    postCategoriesHeader.innerText = 'Categories';
    let category1 = document.createElement('li');
    let category2 = document.createElement('li');
    let category3 = document.createElement('li');

    category1.innerText = rrnNewsPosts[i].categories[0];
    category2.innerText = rrnNewsPosts[i].categories[1];
    category3.innerText = rrnNewsPosts[i].categories[2];

    if (rrnNewsPosts[i].categories[0] != null) {
        category1.innerText = rrnNewsPosts[i].categories[0];
        postCategoriesList.appendChild(category1);
    }

    if (rrnNewsPosts[i].categories[1] != null) {
        category1.innerText = rrnNewsPosts[i].categories[1];
        postCategoriesList.appendChild(category2);
    }

    if (rrnNewsPosts[i].categories[2] != null) {
        category1.innerText = rrnNewsPosts[i].categories[2];
        postCategoriesList.appendChild(category3);
    }

    postDesktopContainer.appendChild(postTitle);
    postDesktopContainer.appendChild(postDiscription);

    postSrc.appendChild(postSrcIcon);
    postSmallTitle.appendChild(postSrc);
    postCoverOverlayContainer.appendChild(postSmallTitle);
    postCoverOverlayContainer.appendChild(postSmallDiscription);

    postWrittenByContainer.appendChild(postWrittenByHeader);
    postWrapRow1.appendChild(postAuthorImg);
    postWrapRow1.appendChild(postAuthor);
    postWrittenByContainer.appendChild(postWrapRow1);
    postMetaInfoContainer.appendChild(postWrittenByContainer);

    postPublishedOnContainer.appendChild(postPublishedOnHeader);
    postWrapRow2.appendChild(postPublished);
    postPublishedOnContainer.appendChild(postWrapRow2);
    postMetaInfoContainer.appendChild(postPublishedOnContainer);

    postCategoriesContainer.appendChild(postCategoriesHeader);
    postCategoriesContainer.appendChild(postCategoriesList);
    postMetaInfoContainer.appendChild(postCategoriesContainer);

    postCoverOverlayContainer.appendChild(postMetaInfoContainer);

    postCover.appendChild(postCoverOverlayContainer);
    postDesktopContainer.appendChild(postCover);

    newPostContainer.appendChild(postDesktopContainer);
}

function createMobilePost(newPostContainer, rrnNewsPosts, i) {

    // creates all the needed elements for post

    let postMobileContainer = document.createElement('div');

    let postCover = document.createElement('div');
    let postInfoContainer = document.createElement('div');

    let postCategoryContainer = document.createElement('div');
    let postCategoryList = document.createElement('ul');
    let postCategoryListItem = document.createElement('li');

    let postTitle = document.createElement('h3');
    let postSrc = document.createElement('a');
    let postSrcIcon = document.createElement('i');
    let postDiscription = document.createElement('p');

    let postWrittenPublishedContainer = document.createElement('div');
    let postWrapRow = document.createElement('div');
    let postAuthorImg = document.createElement('img');
    let postWrittenPublishedList = document.createElement('ul');
    let postAuthor = document.createElement('li');
    let postPublished = document.createElement('li');

    // add info and classes to each container

    postMobileContainer.classList.add('post-mobile');

    postCover.classList.add('post-cover-mobile');
    postCover.style.backgroundImage = 'url(' + rrnNewsPosts[i].postCover + ')';

    postInfoContainer.classList.add('mobile-post-info');

    postCategoryContainer.classList.add('categories');
    postCategoryContainer.style.width = '100%';
    postCategoryListItem.innerText = rrnNewsPosts[i].categories[0];

    postTitle.innerText = rrnNewsPosts[i].mainTitle;
    postSrc.href = rrnNewsPosts[i].newsletterSrc;
    postSrc.setAttribute('target', "_blank");
    postSrcIcon.classList.add('fa-solid');
    postSrcIcon.classList.add('fa-arrow-up');

    postDiscription.innerText = rrnNewsPosts[i].mainDiscription;

    postWrittenPublishedContainer.classList.add('written-by');
    postWrittenPublishedContainer.style.width = '100%';
    postWrapRow.classList.add('wrap-row');

    postAuthorImg.src = rrnNewsPosts[i].authorPhoto;
    postAuthor.innerText = rrnNewsPosts[i].writtenBy;
    postPublished.innerText = rrnNewsPosts[i].publishedOn;

    postMobileContainer.appendChild(postCover);

    postCategoryList.appendChild(postCategoryListItem);
    postCategoryContainer.appendChild(postCategoryList);
    postInfoContainer.appendChild(postCategoryContainer);

    postSrc.appendChild(postSrcIcon);
    postTitle.appendChild(postSrc);
    postInfoContainer.appendChild(postTitle);

    postInfoContainer.appendChild(postDiscription);

    postWrapRow.appendChild(postWrittenPublishedContainer);

    postWrittenPublishedContainer.appendChild(postAuthorImg);
    postWrittenPublishedContainer.appendChild(postWrittenPublishedList);
    postWrittenPublishedList.appendChild(postAuthor);
    postWrittenPublishedList.appendChild(postPublished);

    postInfoContainer.appendChild(postWrapRow);

    postMobileContainer.appendChild(postInfoContainer);

    newPostContainer.appendChild(postMobileContainer);
    postsContainer.appendChild(newPostContainer);
}