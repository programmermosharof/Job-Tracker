// ============ STEP 1 : data Setup ===========
let jobs = [
    {
        id: 1,
        company: 'Mobile First Corp',
        position: 'React Native Developer',
        location: 'Remote',
        type: 'Full-time',
        salary: '$130k - $175k',
        status: 'not-applied',
        desc: 'Build cross-platform mobile applications using React Native. Work on products used by millions of users worldwide.'
    },

    {
        id: 2,
        company: 'WebFlow Agency',
        position: 'Web Designer & Developer',
        location: 'Los Angeles, CA',
        type: 'Part-time',
        salary: '$40k - $55k',
        status: 'not-applied',
        desc: 'Create stunning web experiences for high-profile clients. Must have portfolio and experience with modern web design trends.'
    },
    {
        id: 3,
        company: 'DataViz Solutions',
        position: 'Data Visualization Specialist',
        location: 'Boston, MA',
        type: 'Full-time',
        salary: '$125,000 - $165,000',
        status: 'not-applied',
        desc: 'Transform complex data into compelling visualizations. Required skills: D3.js, React, and strong analytical thinking.'
    },
    {
        id: 4,
        company: 'CloudFirst Inc',
        position: 'Backend Developer',
        location: 'Seattle, WA',
        type: 'Full-time',
        salary: '$140,000 - $190,000',
        status: 'not-applied',
        desc: 'Design and maintain scalable backend systems using Python and AWS. Work with modern DevOps practices and cloud infrastructure.'
    },
    {
        id: 5,
        company: 'Innovation Labs',
        position: 'UI/UX Engineer',
        location: 'Austin, TX',
        type: 'Full-time',
        salary: '$110,000 - $150,000',
        status: 'not-applied',
        desc: 'Create beautiful and functional user interfaces for our suite of products. Strong design skills and frontend development expertise required.'
    },
    {
        id: 6,
        company: 'MegaCorp Solutions',
        position: 'JavaScript Developer',
        location: 'New York, NY',
        type: 'Full-time',
        salary: '$130,000 - $170,000',
        status: 'not-applied',
        desc: 'Build enterprise applications with JavaScript and modern frameworks. Competitive compensation, health insurance, and professional development.'
    },
    {
        id: 7,
        company: 'StartupXYZ',
        position: 'Full Stack Engineer',
        location: 'Remote',
        type: 'Full-time',
        salary: '$120,000 - $160,000',
        status: 'not-applied',
        desc: 'Join our fast-growing startup and work on our core platform. Experience with Node.js and React required. Great benefits and equity package.'
    },
    {
        id: 8,
        company: 'TechCorp Industries',
        position: 'Senior Frontend Developer',
        location: 'San Francisco, CA',
        type: 'Full-time',
        salary: '$130,000 - $175,000',
        status: 'not-applied',
        desc: 'We are looking for an experienced Frontend Developer to build scalable web applications using React and TypeScript.'
    }
  
];

let currentTab = 'all';

//Step 2: Helper Function

function getBadgeInfo(status){
    // Part = 1
    let badgeText = 'NOT APPLIED';
    let badgeClass = 'badge-not-applied';


     // Status 'interview' 
    if (status === 'interview') {
        badgeText = 'INTERVIEW';
        badgeClass = 'badge-interview';
    }

    // Status 'rejected' 
    if (status === 'rejected') {
        badgeText = 'REJECTED';
        badgeClass = 'badge-rejected';
    }

      return {
        text: badgeText,
        className: badgeClass
    };

}


// Step 3 Create Job Card Function 
function createJobCard(job){
    // ---- CARD ----
    const card = document.createElement('div');
    card.className = 'bg-white p-6 rounded-xl border border-slate-100 shadow-sm hover:shadow-md transition-all relative';
    //  ============= Top Row ===============
    const topRow = document.createElement('div');
    topRow.className = 'flex justify-between items-start';
    // ============ Left Side ===============
     const leftSide = document.createElement('div');

    //  ========= Company Name =============
    const companyName = document.createElement('h4');
    companyName.className = 'font-bold text-xl text-slate-800';
    companyName.textContent = job.company;

    // ======= Position Title ==============
    const positionTitle = document.createElement('p');
    positionTitle.className = 'text-blue-600 font-semibold text-sm mb-2';
    positionTitle.textContent = job.position;

    //  =========== operator diye 3ta string join ===========
    const jobDetails = document.createElement('p');
    jobDetails.className = 'text-xs text-slate-400 font-medium';
    jobDetails.textContent = job.location + ' • ' + job.type + ' • ' + job.salary;

    
    //================ Badge — status ==============

    const badgeInfo = getBadgeInfo(job.status);

    const badge = document.createElement('div');

    badge.className = 'mt-4 inline-block px-3 py-1 rounded text-xs font-bold tracking-wider ' + badgeInfo.className;
    badge.textContent = badgeInfo.text;

    // ================= Job description =====================
    const description = document.createElement('p');
    description.className = 'text-sm text-slate-600 mt-3 leading-relaxed';
    description.textContent = job.desc;
   // ======================== appendChild ==============
    leftSide.appendChild(companyName);   
    leftSide.appendChild(positionTitle); 
    leftSide.appendChild(jobDetails);    
    leftSide.appendChild(badge);        
    leftSide.appendChild(description);  
    
    // ===== Delete Button =========
    const deleteButton = document.createElement('button');
    deleteButton.className = 'text-slate-300 hover:text-red-500 transition-colors';

    const trashIcon = document.createElement('i');
    trashIcon.className = 'fa-solid fa-trash-can text-lg';

    deleteButton.appendChild(trashIcon);

    // onclick — button
    deleteButton.onclick = function () {
        deleteJob(job.id);
    };

    // ========= topRow e left ar right side =======
    topRow.appendChild(leftSide);      
    topRow.appendChild(deleteButton);


    // ----  Action Buttons ----
    const actionRow = document.createElement('div');
    actionRow.className = 'mt-6 flex gap-3';

       //  ==== Interview Button
    const interviewButton = document.createElement('button');
    // Default style: 
    interviewButton.className = 'px-5 py-1.5 border border-green-500 text-green-600 rounded-lg text-sm font-bold hover:bg-green-500 hover:text-white transition-all';
    interviewButton.textContent = 'Interview';

        // job er status interview
    
    if (job.status === 'interview') {
        interviewButton.classList.add('bg-green-500'); 
        interviewButton.classList.add('text-white');   
    }

    interviewButton.onclick = function () {
     updateStatus(job.id, 'interview');
    };


    // Rejected Button
    const rejectedButton = document.createElement('button');
    rejectedButton.className = 'px-5 py-1.5 border-2 border-red-500 text-red-600 rounded-lg text-sm font-bold hover:bg-red-500 hover:text-white transition-all';
    rejectedButton.textContent = 'Rejected';

    if (job.status === 'rejected') {
    rejectedButton.classList.add('bg-red-500');
    rejectedButton.classList.add('text-white');
    }

    rejectedButton.onclick = function () {
        updateStatus(job.id, 'rejected');
    };

       //  button action
    actionRow.appendChild(interviewButton);
    actionRow.appendChild(rejectedButton); 

        // ---- FINAL ----

    card.appendChild(topRow);
    card.appendChild(actionRow);

    return card;
}


// -------- Step 4: Render Job Function ----------
function renderJobs(){
    const container = document.getElementById('job-container');
    const emptyState = document.getElementById('empty-state');
    const countDisplay = document.getElementById('job-list-count');

    //  Step 1 Filter 

    const filteredJobs = []; 

    for(let i = 0; i < jobs.length; i++){
        const thisJob = jobs[i];

        if(currentTab === 'all'){

            filteredJobs.push(thisJob);
        }
        else if(thisJob.status === currentTab){

            filteredJobs.push(thisJob);
        }
    }

    //  Step 2 Clear Container
    container.innerHTML = '';

    // Step 3: count update 
    if(currentTab === 'all'){
        // All tab: total jobs count
        countDisplay.textContent = jobs.length + " jobs";

    }else{
        countDisplay.textContent = filteredJobs.length + ' of ' + jobs.length + ' jobs' ;
    }
    // ----   Step 4: Empty State Check ----
    if(filteredJobs.length === 0){
        emptyState.classList.remove('hidden');
    }else{
        emptyState.classList.add('hidden');
    }
    // step 5: card render
    for(let j = 0; j < filteredJobs.length; j++){
        const currentJob = filteredJobs[j];

        const jobCard = createJobCard(currentJob);

        container.appendChild(jobCard);
    }

       // ---- DashBoard Update----
    
    updateDashboard();
}

// ==========  Action Function  ===========
function updateStatus(id, newStatus){
    let foundIndex = -1;

    for(let i = 0; i < jobs.length; i++){
        if(jobs[i].id === id){
            foundIndex = i;
            break;
        }
    }

    if(foundIndex !== -1){

        if (jobs[foundIndex].status === newStatus) {
            jobs[foundIndex].status = 'not-applied';
    }else {
            
            jobs[foundIndex].status = newStatus;
        }
}
renderJobs();
}

function deleteJob(id){
    if(currentTab === 'all'){

        const updatedJobs =[];

         for (let i = 0; i < jobs.length; i++) {
            if (jobs[i].id !== id) {
                updatedJobs.push(jobs[i]); 
            }    
        }     
    jobs = updatedJobs;
    }else{
                for (let i = 0; i < jobs.length; i++) {
            if (jobs[i].id === id) {
                jobs[i].status = 'not-applied'; 
                break; 
            }
        }
    }

    renderJobs(); 
    
}
// // ---- filterJobs ----
function filterJobs(tab, clickedButton){

    currentTab = tab;

    const allButtons = document.querySelectorAll('.tab-btn');

     for (let i = 0; i < allButtons.length; i++) {
        allButtons[i].classList.remove('active-tab'); 
    }
    clickedButton.classList.add('active-tab');

     renderJobs();
}

//  ====== Update Dashboard + Call ======

function updateDashboard() {

    const totalCount = jobs.length;
    //  ========== Interview count ====
    let interviewCount = 0;

        for (let i = 0; i < jobs.length; i++) {
        if (jobs[i].status === 'interview') {
            interviewCount = interviewCount + 1; 
        }
    }
    //  ==== Rejected Count =====
    let rejectedCount = 0;

    for (let j = 0; j < jobs.length; j++) {
        if (jobs[j].status === 'rejected') {
            rejectedCount = rejectedCount + 1;
        }
    }

    document.getElementById('total-count').textContent = totalCount;
    document.getElementById('interview-count').textContent = interviewCount;
    document.getElementById('rejected-count').textContent = rejectedCount;

}
renderJobs();