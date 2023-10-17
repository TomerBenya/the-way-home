const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// User Schema
const userSchema = new Schema({
    username: String,
    password: String, // Ensure this is hashed before saving for security purposes
    joined_date: Date,
    gender: String,
    age_group: String,
    introductory_questions: {
        color: String,
        picture: String,
        sound: String
    }
});

// Sessions Schema
const sessionSchema = new Schema({
    user_id: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    session_count: Number,
    date: Date,
    mood: {
        before_session: Number,
        after_session: Number,
        change: Number
    },
    location: String,
    topics: [String],
    roles: {
        neutral_observer: {
            user_input: String,
            chat_gpt_summary: String
        },
        heart_companion: {
            user_input: String,
            chat_gpt_summary: String
        },
        personal_assistant: {
            user_input: String,
            chat_gpt_summary: String
        }
    },
    session_summary_by_chat_gpt: String,
    keywords: {
        positive_sentiment: [String],
        negative_sentiment: [String]
    },
    daily_lifestyle_data: {
        physical_activity: {
            type: String,
            duration: Number,
            intensity: String,
            start_time: String
        },
        diet: {
            number_of_meals: Number,
            hydration: Number,
            caloric_intake: Number
        },
        sleep_pattern: String,
        average_daily_heart_rate: Number,
        device_data: {
            apple_watch: {
                heart_rate_variability: Number,
                resting_heart_rate: Number,
                active_energy_burned: Number,
                readiness_score: Number
            },
            ouraring: {
                readiness_score: Number,
                sleep_duration: Number,
                activity_duration: Number,
                sleep_efficiency: Number
            }
        }
    },
    user_insights: String,
    mental_health_indicators: {
        loss_of_interest: Boolean,
        fatigue: Boolean,
        anxiety_level: Number,
        changes_in_appetite: Boolean,
        feelings_of_worthlessness: Boolean,
        concentration_difficulty: Boolean,
        total_indicators: Number
    },
    ml_mental_health_indicators: {
        ml_loss_of_interest: Boolean,
        ml_fatigue: Boolean,
        ml_anxiety_level: Number,
        ml_changes_in_appetite: Boolean,
        ml_feelings_of_worthlessness: Boolean,
        ml_concentration_difficulty: Boolean,
        ml_total_indicators: Number
    },
    session_vs_average_mental_health: {
        session_vs_average: Number
    },
    ml_indicators_vs_user_indicators: Number
});

// LifestyleTrends Schema
const lifestyleTrendsSchema = new Schema({
    user_id: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    trend_id: String,
    start_date: Date,
    end_date: Date,
    average_mood_change_per_session: Number,
    diet_type: String,
    activity_pattern: {
        most_active_time_of_day: String,
        most_common_activity: String
    },
    dietary_trends: {
        commonly_consumed_foods: [String],
        daily_average_caloric_intake: Number
    },
    sleep_trends: {
        average_sleep_duration: Number,
        average_sleep_efficiency: Number
    },
    device_data_trends: {
        average_heart_rate: Number,
        apple_watch: {
            average_heart_rate_variability: Number,
            average_resting_heart_rate: Number,
            average_active_energy_burned: Number,
            average_readiness_score: Number
        },
        ouraring: {
            average_readiness_score: Number,
            average_sleep_duration: Number,
            average_activity_duration: Number,
            average_sleep_efficiency: Number
        }
    }
});

// TrendsAndPatterns Schema
const trendsAndPatternsSchema = new Schema({
    user_id: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    trend_id: {
        type: Schema.Types.ObjectId,
        ref: 'LifestyleTrends'
    },
    common_moods: [String],
    common_topics: [String],
    frequent_positive_keywords: [String],
    frequent_negative_keywords: [String],
    activity_to_mood_correlation: Number
});

// UserGoalsAndAchievements Schema
const userGoalsAndAchievementsSchema = new Schema({
    user_id: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    goal_description: String,
    start_date: Date,
    expected_end_date: Date,
    actual_end_date: Date,
    status: String,
    notes: String
});

// UserNotes Schema
const userNotesSchema = new Schema({
    user_id: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    date: Date,
    content: String
});

// AppSettings Schema
const appSettingsSchema = new Schema({
    user_id: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    notification_preferences: {
        reminder_notifications: Boolean,
        daily_summary_notifications: Boolean,
        session_notifications: Boolean
    },
    theme: String,
    language: String
});

// Models
const User = mongoose.model('User', userSchema);
const Session = mongoose.model('Session', sessionSchema);
const LifestyleTrends = mongoose.model('LifestyleTrends', lifestyleTrendsSchema);
const TrendsAndPatterns = mongoose.model('TrendsAndPatterns', trendsAndPatternsSchema);
const UserGoalsAndAchievements = mongoose.model('UserGoalsAndAchievements', userGoalsAndAchievementsSchema);
const UserNotes = mongoose.model('UserNotes', userNotesSchema);
const AppSettings = mongoose.model('AppSettings', appSettingsSchema);

module.exports = {
    User,
    Session,
    LifestyleTrends,
    TrendsAndPatterns,
    UserGoalsAndAchievements,
    UserNotes,
    AppSettings
};
