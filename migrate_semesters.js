const fs = require('fs');
const path = require('path');

/**
 * Script to migrate folder structure from relative (1-2) 
 * to linear (1-8) semesters.
 */

const root = './';
const categories = ['Syllabus', 'PYQs', 'Books', 'Materials'];

categories.forEach(cat => {
    const catPath = path.join(root, cat);
    if (!fs.existsSync(catPath)) return;

    // Iterate through Streams (IT, CSE, etc.)
    fs.readdirSync(catPath).forEach(stream => {
        const streamPath = path.join(catPath, stream);
        if (!fs.statSync(streamPath).isDirectory()) return;

        // Iterate through Years (1, 2, 3, 4)
        fs.readdirSync(streamPath).forEach(year => {
            const yearPath = path.join(streamPath, year);
            if (!fs.statSync(yearPath).isDirectory() || isNaN(year)) return;

            // Check for relative semesters '1' and '2'
            ['1', '2'].forEach(sem => {
                const oldSemPath = path.join(yearPath, sem);
                
                if (fs.existsSync(oldSemPath) && fs.statSync(oldSemPath).isDirectory()) {
                    const linearSem = (parseInt(year) - 1) * 2 + parseInt(sem);
                    const newSemPath = path.join(yearPath, linearSem.toString());

                    // Avoid renaming if it's already linear (like Year 1)
                    if (oldSemPath !== newSemPath) {
                        console.log(`Moving: ${oldSemPath} -> ${newSemPath}`);
                        
                        // If the target already exists (unlikely but safe), we merge
                        if (fs.existsSync(newSemPath)) {
                            console.warn(`Warning: ${newSemPath} already exists. Merging contents...`);
                            fs.readdirSync(oldSemPath).forEach(file => {
                                fs.renameSync(path.join(oldSemPath, file), path.join(newSemPath, file));
                            });
                            fs.rmdirSync(oldSemPath);
                        } else {
                            fs.renameSync(oldSemPath, newSemPath);
                        }
                    }
                }
            });
        });
    });
});

console.log('Migration complete. Verify your folders and then git push.');